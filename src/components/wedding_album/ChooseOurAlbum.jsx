import { FaArrowRight } from 'react-icons/fa';
import { FiLayout } from 'react-icons/fi';
import { GiLaserTurret } from 'react-icons/gi';
import { MdOutlineLayers } from 'react-icons/md';

const ChooseAlbum = () => {
    const features = [
        {
            title: "Luxury Materials",
            description: "Choose from premium leather, linen, or velvet covers that add a sophisticated touch to your wedding album.",
            link: "Learn More ",
            icon: <MdOutlineLayers className="text-3xl text-amber-600" />
        },
        {
            title: "Custom Layouts",
            description: "Personalize your album with a variety of design templates, layouts, and photo arrangements to tell your story exactly how you want.",
            link: "Learn More ",
            icon: <FiLayout className="text-3xl text-amber-600" />
        },
        {
            title: "High-Quality Printing",
            description: "Our eco-friendly printing technology ensures vibrant colors, sharp details, and long-lasting durability.",
            link: "Learn More ",
            icon: <GiLaserTurret className="text-3xl text-amber-600" />
        }
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-[Suranna] mb-4">Why Choose Our Wedding Albums</h1>
                    <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 border-4 border-amber-200 border-b-amber-500 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                            
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h2>
                            <p className="text-gray-600 mb-6">{feature.description}</p>
                            <a
                                href="#"
                                className="text-amber-600 font-medium flex items-center hover:text-amber-700 transition-colors"
                            >
                                {feature.link.replace("Leam", "Learn")}
                                <FaArrowRight className="ml-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChooseAlbum;