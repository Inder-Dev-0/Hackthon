import { FaSearch, FaHeart, FaShare } from 'react-icons/fa';

const PhotobookGallery = () => {
    const galleryItems = [
        {
            id: 1,
            category: 'Wedding',
            title: 'Classic Elegance Album',
            img: 'https://i.ebayimg.com/images/g/1wIAAOSw9UZk6dxi/s-l400.jpg'
        },
        {
            id: 2,
            category: 'Travel',
            title: 'Adventure Photobook',
            img: 'https://cdn.notonthehighstreet.com/fs/7a/c9/4bc6-5828-43fe-abd2-dccefedc1d96/original_personalised-distressed-handmade-leather-photo-album.jpg'
        },
        {
            id: 3,
            category: 'Family',
            title: 'Generations Keepsake',
            img: 'https://stori.co.uk/cdn/shop/files/Stori-289_778c1907-589e-44ed-9b87-88d96e1f156c_2048x.jpg?v=1711646846'
        },
        {
            id: 4,
            category: 'Wedding',
            title: 'Modern Love Story',
            img: 'https://images.ctfassets.net/vslf360wjjc4/2fHEoFtkh4xazOce8JUpk8/68c5b7a0d27acc3740be5072e1d4eff3/MD_09848__1_.jpg?fit=pad&w=3840&q=70&fm=webp'
        },
        {
            id: 5,
            category: 'Baby',
            title: 'First Year Memories',
            img: 'https://www.pikperfect.com/assets/images/towebp/3.1_professional_wedding_album/premium-wedding-photo-book.jpg'
        },
        {
            id: 6,
            category: 'Travel',
            title: 'European Vacation',
            img: 'https://images.squarespace-cdn.com/content/v1/57273ee9b09f951c90d62e76/1592935565047-HM5T8GVDSF8P185D28EC/04_Crackel-Acorn-Leather-Album.jpg'
        },
        {
            id: 7,
            category: 'Wedding',
            title: 'Vintage Romance',
            img: 'https://x.dkphoto.ie/wp-content/uploads/2021/03/Printing-Wedding-album.jpg.webp'
        },
        {
            id: 8,
            category: 'Graduation',
            title: 'Academic Journey',
            img: 'https://x.dkphoto.ie/wp-content/uploads/2020/03/wedding-albums-ireland-00002-600x400.jpg.webp'
        }
    ];

    return (
        <div className="font-sans bg-white text-gray-800">
            <section className="relative py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-xl text-amber-700 mb-4">OUR GALLERY</h1>
                    <h2 className="text-5xl font-[Suranna] mb-4">Photobook Albums Gallery</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Preserve your most precious memories with a custom-designed wedding album from The Printable Store.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <img src={item.img} alt="" className=' w-full h-full object-cover rounded' />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-80 space-x-4">
                                <button className="bg-white bg-opacity-80 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <FaSearch className="text-amber-600 text-lg" />
                                </button>
                                <button className="bg-white bg-opacity-80 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <FaHeart className="text-amber-600 text-lg" />
                                </button>
                                <button className="bg-white bg-opacity-80 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <FaShare className="text-amber-600 text-lg" />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <span className="text-sm font-medium">{item.category}</span>
                                <h3 className="font-semibold">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PhotobookGallery;