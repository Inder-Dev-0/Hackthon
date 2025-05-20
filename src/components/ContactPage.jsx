import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import Form from "./Form"

const ContactPage = () => {
    return <>
        <div className="font-sans bg-white text-gray-800 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <section className="text-center mb-16">
                <h1 className="text-2xl md:text-2xl text-amber-700 mb-4">CONTACT US</h1>
                <h2 className="text-5xl font-[Suranna] mb-4">Get In Touch With Us</h2>

                <div className="max-w-3xl mx-auto text-lg leading-relaxed">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We're always happy to help! Whether you have a question, need assistance with your order,
                        or want more information about our products, we'd love to hear from you.
                    </p>
                </div>
            </section>

            <div className="w-full h-90 bg-[url(https://www.shaadidukaan.com/vogue/wp-content/uploads/2022/12/image-149-1024x683.png)] bg-center mb-15 rounded-lg duration-300"></div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-gray-50 p-8 rounded-lg text-center border-4 border-amber-200 border-b-amber-500 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                        <FaEnvelope className="text-3xl text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a
                        href="mailto:support@theprintablestore.com"
                        className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                        support@theprintablestore.com
                    </a>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg text-center border-4 border-amber-200 border-b-amber-500 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                        <FaPhone className="text-3xl text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <a
                        href="tel:+1254652903"
                        className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                        +1 (254) 652-903
                    </a>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg text-center border-4 border-amber-200 border-b-amber-500 hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                        <FaMapMarkerAlt className="text-3xl text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">
                        123 Printable Lane<br />
                        Cityville, Country
                    </p>
                </div>
            </section>
        </div>
        <Form />
    </>
}

export default ContactPage