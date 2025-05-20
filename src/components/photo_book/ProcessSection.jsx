import { FaUpload, FaCheckCircle, FaPalette } from 'react-icons/fa';

const ProcessSection = () => {
    
  const processSteps = [
    {
      step: "01",
      title: "Choose & Personalize",
      description: "Select your album's cover material, size, and layout. Add custom touches like text, engravings, and photo placements.",
      icon: <FaPalette className="text-amber-500 text-4xl" />
    },
    {
      step: "02",
      title: "Upload Your Photos",
      description: "Easily upload your wedding photos to our user-friendly platform.",
      icon: <FaUpload className="text-amber-500 text-4xl" />
    },
    {
      step: "03",
      title: "Review & Order",
      description: "Preview your album design, make any final adjustments, and place your order. We'll print, package, and deliver it to your doorstep!",
      icon: <FaCheckCircle className="text-amber-500 text-4xl" />
    }
  ];

    return <>
        
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-amber-100 rounded-xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-xl text-amber-700 mb-4">OUR PROCESS</h2>
          <h3 className="text-5xl font-[Suranna] mb-4">How It Works</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preserve your most precious memories with a custom-designed wedding album from The Printable Store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-3xl font-bold text-amber-700">{step.step}</span>
              </div>
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h4 className="text-xl font-[Suranna] mb-4">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
}

export default ProcessSection