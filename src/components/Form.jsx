import { useState } from 'react';
import { Button } from './Card';

const Form = () => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
            <header className="text-center mb-16">
                <p className="text-xl md:text-2xl text-amber-700 mb-8">
                    GET IN TOUCH
                </p>
                <h1 className="text-4xl md:text-5xl font-[Suranna] text-gray-800 uppercase tracking-wider mb-6">
                    Have questions or need assistance?
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We’re here to help! Whether you're looking for design advice, bulk orders, or more details about our products, feel free to reach out.
                </p>
                
            </header>

            <section className="my-20 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-full p-12">
                        {submitted ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                                <strong className="font-bold">Thank you!</strong>
                                <span className="block sm:inline"> Your message has been submitted. We'll get back to you soon.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder='Enter First Name'
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder='Enter Last Name'
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder='Enter Email'
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder='Enter Number'
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                                        Service Interested In *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="wedding-albums">Wedding Albums</option>
                                        <option value="photobooks">Photobooks</option>
                                        <option value="art-prints">Art Prints</option>
                                        <option value="custom-design">Custom Design</option>
                                    </select>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder='Write Youe Message ....'
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    ></textarea>
                                </div>

                                <div className="mt-8">
                                    <Button 
                                        type="submit"  
                                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                                    >
                                        Submit Message
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Form;