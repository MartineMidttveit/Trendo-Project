import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" });
    };

    const validateForm = () => {
        let validationErrors = {};

        if (!formData.name) {
            validationErrors.name = "Name is required.";
        }

        if (!formData.email) {
            validationErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid.";
        }

        if (!formData.message) {
            validationErrors.message = "Message is required.";
        }

        return validationErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted:", formData);
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: ""
            });
            setErrors({});
        }
    };

    return (
        <main className="text-primary font-barlow relative">
            <div className="bg-customGrey shadow-lg">
                <div className="2xl:w-1/3 mx-auto px-10 pt-12 pb-20">
                    <div className="bg-white rounded shadow-md p-8">
                        <h1 className="font-bold text-left text-xl mb-5">Contact</h1>
                        <form className="flex items-center flex-col text-left" onSubmit={handleSubmit}>
                            <div className="flex justify-center w-full gap-5 flex-col lg:flex-row">
                                <div className="flex flex-col w-full">
                                    <label className="font-semibold w-fit" htmlFor="name">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`ring-1 py-2 pl-3 mt-2 rounded focus:outline-none focus:ring-black focus:border-0 ${errors.name ? 'ring-red-500' : 'ring-secondary'}`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                                </div>

                                <div className="flex flex-col w-full">
                                    <label className="flex items-center justify-between font-semibold" htmlFor="phone">
                                        Phone Number:
                                        <span className="text-secondary text-base">(optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="ring-1 ring-secondary py-2 pl-3 mt-2 rounded focus:outline-none focus:ring-black focus:border-0"
                                        placeholder="+ 47 96 15 92 43"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full mt-5">
                                <label className="flex items-center justify-between font-semibold w-fit" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`ring-1 py-2 pl-3 mt-2 rounded focus:outline-none focus:ring-black focus:border-0 ${errors.email ? 'ring-red-500' : 'ring-secondary'}`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>

                            <div className="flex flex-col w-full mx-auto mt-5">
                                <label htmlFor="message">
                                    Your message:
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here"
                                    className={`h-[14rem] ring-1 rounded resize-none mt-2 focus:outline-none focus:border-none focus:ring-black p-2.5 ${errors.message ? 'ring-red-500' : 'ring-secondary'}`}
                                />
                                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                className="bg-secondary text-white px-5 py-2 rounded mt-5 w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
