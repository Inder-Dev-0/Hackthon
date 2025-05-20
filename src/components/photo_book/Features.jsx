import { FaArrowRight } from 'react-icons/fa';
import { FiPrinter } from 'react-icons/fi';
import { LuLayoutPanelTop } from 'react-icons/lu';
import { SiInfluxdb } from 'react-icons/si';
import { TbGiftCard } from 'react-icons/tb';

const Features = () => {
  const features = [
    {
      title: "Luxury Materials",
      description: "Choose from premium leather, linen, or velvet covers that add a sophisticated touch to your wedding album.",
      icon: <SiInfluxdb className="text-amber-500 text-2xl" />
    },
    {
      title: "Custom Layouts",
      description: "Personalize your album with a variety of design templates, layouts, and photo arrangements to tell your story exactly how you want.",
      icon: <LuLayoutPanelTop className="text-amber-500 text-2xl" />
    },
    {
      title: "Eco-Friendly Printing",
      description: "Our eco-conscious printing methods guarantee beautiful results without harming the environment.",
      icon: <FiPrinter className="text-amber-500 text-2xl" />
    },
    {
      title: "Perfect for Any Occasion",
      description: "Whether you're preserving a recent trip, a family event, or a special celebration, our photobooks are designed to capture the moment.",
      icon: <TbGiftCard className="text-amber-500 text-2xl" />
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-[Suranna] mb-4">Why Choose Our Photobooks</h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-amber-100 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-[Suranna] text-center mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{feature.description}</p>
              <div className="text-center">
                <a href="#" className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700 transition-colors">
                  Learn More <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 my-12"></div>
      </section>
    </div>
  );
};

export default Features;