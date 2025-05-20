const PrintableStore = () => {
    const bestsellers = [
        {
            name: 'Majestic Wedding Book',
            link: 'https://www.sunlife.com.hk/content/dam/sunlife/legacy/assets/hk/life-moments/getting-married/overseas-wedding-main-image.jpg',
            price: 'Starting From $229'
        },
        {
            name: 'Everyday Moments Photobook',
            link: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?cs=srgb&dl=pexels-asadphoto-169198.jpg&fm=jpg',
            price: 'Starting From $229'
        },
        {
            name: 'Everyday Moments Photobook',
            link: 'https://images.squarespace-cdn.com/content/v1/569722e8be7b96eb7f5fb677/fc400750-9331-4a45-990f-21cc5c1df6a2/Destination-wedding%2C+Pass-a-grill-beach-wedding%2C+beach-wedding%2C+asian-beach-ceremony%2C+wedding-photographer',
            price: 'Starting From $229'
        },
        {
            name: 'Custom Art Print Collection',
            link: 'https://samanthaongphoto.com/wp-content/uploads/2020/10/Konzelmann-Estate-Wedding-Photography.jpg',
            price: 'Starting From $229'
        }
    ];

    const premiumAlbums = [
        {
            name: 'Golden Memories Luxe Album',
            link: 'https://i.etsystatic.com/36750386/r/il/edf442/4454805029/il_fullxfull.4454805029_fc3j.jpg'
        },
        {
            name: 'The Majestic Wedding Book',
            link: 'https://online.visual-paradigm.com/repository/images/74ae7f9f-d7c3-4cd2-bbc7-3e670ca25493/wedding-photo-books-design/romantic-wedding-anniversary-photo-book.png'
        },
        {
            name: 'Modern Love Story Album',
            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDVSr5ePmdd41YRjdTpwf7tGqLBQuHQgbAA&s'
        },
        {
            name: 'Royal Romance Signature Album',
            link: 'https://todaysbride.com/wp-content/uploads/2019/02/00291-Ariel-International-Wedding-Photos.jpg'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
            <header className="text-center mb-16">
                <h4 className="text-2xl md:text-xl text-amber-700 mb-4">
                    THE PRINTABLE STORE
                </h4>
                <h1 className="text-5xl font-[Suranna] mb-4">
                    Elegant Photobooks For Every Occasion
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    In addition to wedding albums, we offer photobooks perfect for capturing other milestones—birthdays, anniversaries, vacations, and more.
                </p>
            </header>

            <section className="mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {premiumAlbums.map((album, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="h-60 bg-gray-200 flex items-center justify-center">
                                <img src={album.link} alt="" className=' w-full h-full object-cover rounded' />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-[Suranna] text-gray-800 text-center">{album.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-5xl font-[Suranna] text-center text-gray-800 mb-12">
                    Our Bestseller Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestsellers.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="h-64 bg-gray-200 flex items-center justify-center">
                                <img src={product.link} alt="" className=' w-full h-full object-cover rounded' />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-[Suranna] text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-lg text-amber-600 font-medium">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PrintableStore;
