import { Button } from "../Card";

const ServiceSection = () => {
  return <>
    <div className="max-w-6xl mx-auto px-5 py-8 font-sans text-center">
      <main>
         
        <section className="mb-20">
          <h4 className="text-2xl md:text-xl text-amber-700 mb-4">
            SERVICES
          </h4>
          <h3 className="text-5xl font-[Suranna] text-gray-800 mb-8">
            What All We Offer
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full p-8 bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <h4 className="text-4xl font-[Suranna] text-amber-700">
                Professional Wedding Album
              </h4>
              <section className="mt-7">
                <p className="text-xl md:text-xl text-gray-600 italic">
                  Our premium wedding albums are designed to last a lifetime. With customizable options including leather, linen, and silk covers, elegant layouts, and high-quality archival paper, each album is a unique keepsake that beautifully preserves the memories of your special day.
                </p>
              </section>
              <Button className="mt-4">Know More</Button>
            </div>

            <div className="w-full p-8 bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <h4 className="text-4xl font-[Suranna] text-amber-700">
                Protealooks
              </h4>
              <section className="mt-7">
                <p className="md:text-xl text-gray-600 italic">
                  Capture life’s milestones with our customizable photobooks. Whether it’s a family vacation, anniversary, or personal celebration, choose from various sizes, cover styles, and layouts to create a professionally printed photobook that tells your story with style.
                </p>
              </section>
              <Button className="mt-4">Know More</Button>
            </div>

            <div className="w-full p-8 bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <h4 className="text-4xl font-[Suranna] text-amber-700">
                Youcapture
              </h4>
              <section className="mt-7">
                <p className="md:text-xl text-gray-600 italic">
                  From custom art prints to personalized photo canvases, we offer a wide range of print-on-demand products. Whether you need posters, calendars, greeting cards, or gift items, our high-quality printing services bring your designs to life with exceptional clarity and detail.
                </p>
              </section>
              <Button className="mt-4">Know More</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
}

export default ServiceSection;