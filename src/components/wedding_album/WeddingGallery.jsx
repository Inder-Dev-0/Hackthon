import { FaHeart, FaSearchPlus } from 'react-icons/fa';

const WeddingGallery = () => {
    const galleryImages = [
        {
            id: 1,
            category: 'Classic',
            featured: true,
            img: "https://static.toiimg.com/photo/107269484.cms"
        },
        {
            id: 2,
            category: 'Modern',
            img: "https://img.freepik.com/premium-photo/happy-bride-groom-are-walking-green-park_661495-27598.jpg"
        },
        {
            id: 3,
            category: 'Luxe',
            img: "https://i.pinimg.com/474x/a9/3a/fb/a93afbef06bdb7df8d3c2a56bed6fd7a.jpg"
        },
        {
            id: 4,
            category: 'Vintage',
            img: "https://www.titaniumstyle.com/blog/wp-content/uploads/2019/07/baylee-gramling-FOwYSRlL-Bk-unsplash-320x202.jpg"
        },
        {
            id: 5,
            category: 'Classic',
            img: "https://www.ufuksarisen.com/wp-content/uploads/2019/05/Milan-Villa-Valenca-Wedding-Photos-35.jpg"
        },
        {
            id: 6,
            category: 'Modern',
            img: "https://susanstripling.com/wp-content/uploads/2023/05/14_tappan-hill-mansion-wedding.jpg"
        },
        {
            id: 7,
            category: 'Luxe',
            img: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/fvJZ3vQHLsBu7pYjO9RZ/media/671f969b968508046789b0f3.jpeg"
        },
        {
            id: 8,
            category: 'Vintage',
            img: "https://weddingvibe.com/wp-content/uploads/2020/04/AdobeStock_165029417-1024x686.webp"
        }
    ];

    return (
        <div className="font-sans bg-white text-gray-800">
            <section className="relative py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-2xl text-amber-700 mb-4">OUR GALLERY</h1>
                    <h2 className="text-5xl font-[Suranna] mb-2">Wedding Albums Gallery</h2>
                    <p className="max-w-5xl mx-auto text-gray-700 text-xl mb-6">
                        Preserve your most precious memories with a custom-designed wedding album from The Printable Store.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl flex mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-left w-1/2 mb-16">
                    <h3 className="text-3xl  md:text-4xl font-[Suranna] mb-6">
                        Capture Your Story With <span className="text-amber-600">Every Detail</span>
                    </h3>
                    <div className="max-w-3xl mx-auto text-lg leading-relaxed">
                        <p className="mb-4">
                            No two love stories are the same, and neither should be your wedding album. That's why we offer an array of customizations to make your story reflect your unique journey.
                        </p>
                        <p>
                            From page textures to personalized text, every choice you make adds a personal touch to your keepsake.
                        </p>
                    </div>
                </div>
                <div className='w-1/2 bg-gray-50 rounded-lg'>
                    <img src="https://static.toiimg.com/photo/107269484.cms" alt="" className=' w-full h-80 object-cover rounded' />
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${image.featured ? 'lg:col-span-2' : ''}`}
                        >
                            <div className="bg-gray-200 h-80 flex items-center justify-center">
                                <img src={image.img} alt="" className=' w-full h-full object-cover rounded' />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-60">
                                <button className="bg-white bg-opacity-80 rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <FaHeart className="text-amber-600 text-xl" />
                                </button>
                                <button className="bg-white bg-opacity-80 rounded-full p-3 mx-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <FaSearchPlus className="text-amber-600 text-xl" />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <h4 className="font-semibold">{image.category} Collection</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WeddingGallery;