const BestsellerSection = () => {

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

    return <>
            <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
    </>
}

export default BestsellerSection