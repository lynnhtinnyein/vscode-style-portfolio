import MailIcon from "@public/icons/vs-code-icons/MailIcon";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { socials } from "@/data/socials";

const Contact = () => {
    return (
        <div className="animate-fadeup flex flex-col space-y-8 flex-1 p-5 md:p-10 overflow-auto font-mono">
            <section className="flex flex-col space-y-6" aria-labelledby="contact-heading">
                <div className="flex">
                    <h1
                        id="contact-heading"
                        className="text-3xl text-indigo-400 border-b-4 border-[var(--color-line)]"
                    >
                        Contact Me
                    </h1>
                </div>
                <p className="text-sm leading-relaxed" itemProp="description">
                    I&apos;m always open to discussing new projects, creative ideas, or
                    opportunities to collaborate. Fill out the form below, and I&apos;ll get back to
                    you as soon as possible.
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
                <ContactForm />

                <div className="space-y-6 bg-[var(--color-card)] p-6 rounded-lg shadow-sm border border-[var(--color-line)]">
                    <h2 className="text-2xl text-cyan-500 mb-4">Let&apos;s Connect</h2>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <MailIcon className="text-cyan-500" />
                            <a
                                href="mailto:lynnhtinnyein@gmail.com"
                                className="hover:text-cyan-700 transition-colors"
                                aria-label="Email me"
                            >
                                lynnhtinnyein@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center space-x-3">
                            <MapPinIcon className="size-6 text-cyan-500" />
                            <span itemProp="location">Bangkok, Thailand</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl text-cyan-500 mb-3">Social Links</h3>
                        <div className="flex space-x-2">
                            {socials.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-500 transition-colors overflow-hidden rounded"
                                    aria-label={social.name}
                                >
                                    <Image
                                        src={social.image}
                                        alt={social.name}
                                        width={32}
                                        height={32}
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
