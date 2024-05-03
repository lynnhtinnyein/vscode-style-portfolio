import { contacts } from "@/data/contacts";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
    const [mounted, setMounted] = useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        name: '',
        msg: ''
    });
    const [errorCheckable, setErrorCheckable] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const inputErrors = useMemo( () => {
        const { email, name, msg } = inputs;
        const errors = [];
        if(email === ''){
            errors.push('email')
        }

        if(name === ''){
            errors.push('name')
        }

        if(msg === ''){
            errors.push('msg')
        }

        return errors;
    }, [inputs]);

    const handleInputChange = (e) => {
        const { id, value } = e.currentTarget;
        setInputs( oldValues => {
            const newValues = {...oldValues};
            newValues[id] = value;
            return newValues;
        });
    };

    const submit = (e) => {
        e.preventDefault();
        setErrorCheckable(true);

        if(inputErrors.length === 0){
            setIsSubmitting(true)
            const apiUrl = process.env.NEXT_PUBLIC_APP_URL + '/api';
            axios.post(apiUrl + '/send-email', inputs )
            .then( () => {
                setIsSubmitting(false);
                setIsSubmitted(true);
            })
            .catch( () => {
                setIsSubmitting(false);
            })
        }
    }

    return (
        <div className="flex flex-col flex-1 space-y-7 overflow-auto p-5 md:p-10">

            <div className="flex flex-col space-y-5">
                <span className="text-2xl text-gray-300 font-mono">
                    <Typewriter
                        words={[
                            'Reach me via social'
                        ]}
                        typeSpeed={30}
                    />
                </span>
                
                <div className="flex flex-row flex-wrap">
                    { contacts.map( (contact, index) => (
                        <div 
                            key={contact.id}
                            className={`flex flex-col transition-fade space-y-2 items-center p-2 duration-500
                                ${mounted ? 'opacity-96 mr-0' : 'opacity-0 -mr-10'}
                            `}
                            style={{
                                transitionDelay: `${(index + 1) * 100}ms`
                            }}
                        >
                            <Image
                                src={contact.image}
                                className="rounded-3xl"
                                width={120}
                                height={120}
                                alt={contact.name}
                                priority={true}
                            />
                            <span className="text-sm">
                                { contact.name }
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center space-x-2">
                <div className="flex-1 border-b border-gray-400"/>
                <span className="text-gray-300">OR</span>
                <div className="flex-1 border-b border-gray-400"/>
            </div>

            <div className="flex flex-col space-y-8">

                <div className="flex flex-col space-y-3">
                    <span className="text-2xl text-gray-300 font-mono">
                        <Typewriter
                            words={[
                                'Send an email to'
                            ]}
                            typeSpeed={30}
                        />
                    </span>

                    <span className="text-xl text-orange-300 font-mono mt-2">
                        <Typewriter
                            words={[
                                'lynnhtinnyein@gmail.com'
                            ]}
                            typeSpeed={30}
                        />
                    </span>
                </div>

                <form className="flex flex-col space-y-4" onSubmit={submit}>
                    <div className="flex flex-row justify-between flex-wrap sm:space-x-4">
                        <div className="flex flex-col space-y-1 flex-1">
                            <span className="font-mono">
                                Your Email
                            </span>
                            <input 
                                id="email"
                                type="email"
                                value={inputs.email}
                                className="bg-zinc-700 min-h-10 px-3"
                                readOnly={isSubmitted}
                                onChange={handleInputChange}
                            />
                            { errorCheckable && inputErrors.includes('email') ? (
                                <span className="text-xs text-red-500">Please fill your email!</span>
                            ) : ''}
                        </div>
                        <div className="flex flex-col space-y-1 flex-1">
                            <span className="font-mono">
                                Your Name
                            </span>
                            <input 
                                id="name"
                                type="text"
                                value={inputs.name}
                                className="bg-zinc-700 min-h-10 px-3"
                                readOnly={isSubmitted}
                                onChange={handleInputChange}
                            />
                            { errorCheckable && inputErrors.includes('name') ? (
                                <span className="text-xs text-red-500">Please fill your name!</span>
                            ) : ''}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <span className="font-mono">
                            Write a Message
                        </span>
                        <textarea
                            id="msg"
                            className="bg-zinc-700 min-h-32 p-3"
                            onChange={handleInputChange}
                            readOnly={isSubmitted}
                            value={inputs.msg}
                        />
                         { errorCheckable && inputErrors.includes('msg') ? (
                            <span className="text-xs text-red-500">Please write a message!</span>
                        ) : ''}
                    </div>

                    <button
                        className="disabled:bg-green-700 hover:bg-green-500 bg-green-600 active:bg-green-700 h-12"
                        disabled={true} //isSubmitting || isSubmitted
                    >
                        <span 
                            className="text-gray-300"
                        >
                            { isSubmitted ? 'Email sent successfully' : 
                                isSubmitting ? 'Sending...' : 'This feature is under development.'
                            }
                        </span>
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;
