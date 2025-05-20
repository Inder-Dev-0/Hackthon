const PhotobooksProducts = () => {
    const products = [
        { 
            name: "Majestic Photobook",
            price: "Starting From $229",
            img: "https://media.wired.com/photos/65204a581f7d3d1e97c68dc6/4:3/w_2400,h_1800,c_limit/Photo-Albums-Rave-Gear-GettyImages-1343915691.jpg"
        },
        { 
            name: "Everyday Moments Photobook",
            price: "Starting From $229",
            img: "https://lalalab-bo-catalog.s3.eu-west-1.amazonaws.com/slide_bookdiy_12_8c2a61e25e_f27836fd42_ac08b4b226.webp"
        },
        { 
            name: "Custom Art Photobook",
            price: "Starting From $229",
            img: "https://m.media-amazon.com/images/I/81XzfbG8ORL._AC_UF350,350_QL80_.jpg"
        },
        { 
            name: "Luxe Signature Photobook",
            price: "Starting From $299",
            img: "https://cdn.pixabay.com/photo/2022/12/19/17/18/photos-7666143_1280.jpg"
        },
        { 
            name: "Vintage Memories Photobook",
            price: "Starting From $249",
            img: "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2018/07/Baby-photobooks-1024x683.jpg"
        },
        { 
            name: "Modern Love Photobook",
            price: "Starting From $259",
            img: "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2018/07/creative-photo-album-1024x683.jpg"
        }
    ];

    return (
        <div className="font-sans bg-white text-gray-800">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Photobooks Products</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {products.map((product, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gray-200 flex items-center justify-center">
                                <img src={product.img} alt="" className=' w-full h-full object-cover rounded' />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-amber-600 font-medium">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 my-12"></div>
            </section>
        </div>
    );
};

export default PhotobooksProducts;