import { GiSchoolBag, GiStarMedal } from "react-icons/gi";
import { MdDriveFolderUpload } from "react-icons/md";

const Process = () => {
    const features = [
        {
            title: "Choose & Personalize",
            description: "Select your album’s cover material, size, and layout. Add custom touches like text, engravings, and photo placements.",
            icon: <GiStarMedal className="text-3xl text-amber-600" />
        },
        {
            title: "Upload Your Photos",
            description: "Easily upload your wedding photos to our user-friendly platform.",
            icon: <MdDriveFolderUpload className="text-3xl text-amber-600" />
        },
        {
            title: "Review & Order",
            description: "Preview your album design, make any final adjustments, and place your order. We’ll print, package, and deliver it to your doorstep!",
            icon: <GiSchoolBag className="text-3xl text-amber-600" />
        }
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-2xl md:text-2xl text-amber-700 mb-4">OUR PROCESS</h4>
                    <h1 className="text-5xl font-[Suranna] mb-4">How It Work</h1>
                    <p className="max-w-5xl mx-auto text-gray-700 text-xl mb-6">
                        Preserve your most precious memories with a custom-designed wedding album from The Printale Store.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 border-4 border-amber-200 border-b-amber-500 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h2 className="text-2xl text-center font-[Suranna] text-gray-800 mb-4">{feature.title}</h2>
                            <p className="text-gray-600 text-center mb-6">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Process