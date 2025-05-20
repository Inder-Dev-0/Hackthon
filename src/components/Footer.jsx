const Footer = () => {


    const quickLink = [
        {
            name: 'Choosing the Right Wedding Album',
            link: 'https://media.istockphoto.com/id/623371572/photo/happy-bride-and-groom-on-a-yacht.jpg?s=612x612&w=0&k=20&c=Cf5DlhOldYT2IB6WY8Q22Wu81m0b6iVQ0Jj5B3c-ah0='
        },
        {
            name: 'Creative Photobook Design Ideas',
            link: 'https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Foreign-Wedding-Planners/fwp-01.jpg'
        },
        {
            name: 'Why Eco-Friendly Printing Matters',
            link: 'https://www.eventfaqs.com/Uploads/News/Content/ananya-mayank-img191.jpg'
        },
        {
            name: 'Preserving Your Wedding Album',
            link: 'https://thebridalconsultants.com/wp-content/uploads/2021/09/le-ciel-the-bridal-consultant-santorini-wedding-11.jpg'
        }
    ];

    const product = [
        'Photobooks', 'Designer Frames', 'Classic Frames', 'Premium Frames',
        'Desktop Calendars', 'Wall Calendar', 'Kids Storybooks', 'Home Decor',
        'Photo Mugs', 'Photo Magnets', 'Photo Gathers', 'Photo Puzzles',
        'Card Prints', 'Photo Firths', 'Bags and Poudres', 'Stationary',
        'Chocolate Gift Boxes'
    ]

    return (
        <div className="font-sans bg-white">
            <footer className="bg-gray-900 text-gray-300 py-12 px-4">
                <section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {quickLink.map((album, index) => (
                        <div key={index} className="group">
                            <img src={album.link} alt="" />
                            <h3 className="text-xl font-semibold text-white-800 group-hover:text-amber-600 transition-colors mb-2">{album.name}</h3>
                            <div className="h-0.5 bg-amber-500 w-8 group-hover:w-12 transition-all"></div>
                        </div>
                    ))}
                </section>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Service</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Wedding Albums</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Photobooks</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">General Print on Demand Products</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                            <p className="mb-4">Sign up for exclusive offers and design tips.</p>
                        </div>

                        <div className="flex justify-end">
                            <div className="bg-gray-700 w-16 h-10 flex items-center justify-center rounded">
                                <span className="text-xs">FLAG</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <h4 className="text-white font-semibold mb-4">Popular Category</h4>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm mb-8">
                            {product.map((item, index) => (
                                <span key={index}>
                                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                                    {index < 16 && <span className="mx-1">|</span>}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-800">
                            <div className="flex gap-4 text-sm">
                                <a href="#" className="hover:text-white transition-colors">TERMS</a>
                                <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                                <a href="#" className="hover:text-white transition-colors">SHIPPING & RETURNS</a>
                            </div>
                            <div className="text-sm text-center md:text-left">
                                © Copyright The Printable Store 2024-2025. All Rights Reserved
                            </div>
                            <div className="text-sm">
                                Developed by Wehovel Infotech
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;