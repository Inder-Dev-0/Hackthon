import { FaStar } from 'react-icons/fa';

const CustomerFeedback = () => {
    const testimonials = [
        {
            id: 1,
            quote: "The wedding album we received from The Printable Store exceeded our expectations. The craftsmanship is outstanding, and the quality of the printing is just exceptional. It's a keepsake that we will treasure for a lifetime.",
            author: "Sarah & Luke",
            rating: 5
        },
        {
            id: 2,
            quote: "Absolutely stunning album! The attention to detail was remarkable, and the customer service was top-notch throughout the entire process.",
            author: "Emily & James",
            rating: 5
        },
        {
            id: 3,
            quote: "We couldn't be happier with our wedding album. The colors are vibrant, the pages are thick and luxurious, and the cover is beautiful. Worth every penny!",
            author: "Michael & Jessica",
            rating: 5
        }
    ];

    return (
        <div className="font-sans bg-white text-gray-800">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-2xl text-amber-700 mb-4">CUSTOMER FEEDBACKS</h1>
                    <h2 className="text-5xl font-[Suranna] mb-2">What Our Customers Are Saying</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real reviews from happy couples and families who have trusted The Printable Store to preserve their most cherished memories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-amber-100 p-8 rounded-lg">
                            <div className="flex justify-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-amber-400 text-xl mx-1" />
                                ))}
                            </div>
                            <blockquote className="text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                            <p className="font-semibold text-gray-800">— {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CustomerFeedback;