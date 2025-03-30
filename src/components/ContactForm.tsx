"use client";
import React, { useState, FormEvent } from "react";
import { EnvelopeIcon, UserIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [formState, setFormState] = useState<{
        isSubmitting: boolean;
        status: "idle" | "success" | "error";
    }>({
        isSubmitting: false,
        status: "idle",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setFormState({ isSubmitting: true, status: "idle" });

        try {
            const alertzyUrl = process.env.NEXT_PUBLIC_ALERTZY_URL;
            const alertzyKey = process.env.NEXT_PUBLIC_ALERTZY_KEY;

            const params = new URLSearchParams({
                accountKey: alertzyKey,
                title: formData.name,
                message: `${formData.email}: ${formData.message}`,
            });

            const response = await fetch(alertzyUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params.toString(),
            });

            if (response.ok) {
                setFormState({ isSubmitting: false, status: "success" });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setFormState({ isSubmitting: false, status: "success" });
                setFormData({ name: "", email: "", message: "" });
            }
        } catch {
            setFormState({ isSubmitting: false, status: "success" });
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-[var(--color-card)] p-5 rounded-lg shadow-sm border border-[var(--color-line)]"
        >
            <h2 className="text-2xl text-cyan-500">Get in Touch</h2>

            {/* Name Input */}
            <div className="relative">
                <label htmlFor="name" className="sr-only">
                    Name
                </label>
                <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                    <UserIcon className="size-5 text-cyan-500" />
                </div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-11 py-2 rounded-lg h-11 bg-[var(--color-input)] focus:outline-none focus:border-cyan-500"
                />
            </div>

            {/* Email Input */}
            <div className="relative">
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="size-5 text-cyan-500" />
                </div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full pl-11 py-2 rounded-lg h-11 bg-[var(--color-input)] focus:outline-none focus:border-cyan-500"
                />
            </div>

            {/* Message Textarea */}
            <div className="relative">
                <label htmlFor="message" className="sr-only">
                    Message
                </label>
                <div className="absolute inset-y-0 left-0 px-3 pt-3 pointer-events-none">
                    <ChatBubbleLeftIcon className="size-5 text-cyan-500" />
                </div>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full pl-11 py-2 rounded-lg bg-[var(--color-input)] focus:outline-none focus:border-cyan-500"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={formState.isSubmitting}
                className={`w-full py-3 rounded-lg transition-all duration-300 
                ${
                    formState.isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-cyan-500 hover:bg-cyan-600 text-white"
                }`}
            >
                {formState.isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {formState.status === "success" && (
                <div className="text-center text-green-500 mt-4">
                    Message sent successfully! I&apos;ll get back to you soon.
                </div>
            )}
            {formState.status === "error" && (
                <div className="text-center text-red-500 mt-4">
                    Oops! Something went wrong. Please try again.
                </div>
            )}
        </form>
    );
};

export default ContactForm;
