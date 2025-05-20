import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {

    const faqs = [
        {
            question: "How long does it take to create and deliver an album?",
            answer: "Typically, production takes 2-3 weeks after final approval, plus shipping time. Rush options are available."
        },
        {
            question: "What customization options are available for photos?",
            answer: "You can choose layouts, backgrounds, add text, select filters, and arrange photos in any order."
        },
        {
            question: "What materials are used for the wedding albums?",
            answer: "We offer premium leather, linen, velvet covers, and archival-quality paper for lasting durability."
        },
        {
            question: "Can I make changes after submitting my design?",
            answer: "Yes, we allow up to 3 rounds of revisions before final production."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship worldwide with tracking and insurance included."
        },
        {
            question: "What if I'm not happy with the final product?",
            answer: "We offer a 100% satisfaction guarantee and will reprint your album if you're not completely happy."
        }
    ];

    return <>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h1 className="text-2xl md:text-2xl text-amber-700 mb-4">FAQ</h1>
                <h2 className="text-5xl font-[Suranna] mb-2">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">
                    Address common queries about product customization, materials, delivery times, and customer support.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start mb-4">
                            <FaQuestionCircle className="text-amber-500 text-xl mt-1 mr-3 flex-shrink-0" />
                            <h3 className="text-xl font-semibold">{faq.question}</h3>
                        </div>
                        <p className="text-gray-600 pl-9">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    </>
}

export default FAQ;