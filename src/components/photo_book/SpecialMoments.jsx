import { Button } from "../Card"

const SpecialMoments = () => {
    return <>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-2xl md:text-2xl text-amber-700 mb-4">SPECIAL MOMENTS</h2>
                    <h3 className="text-5xl font-[Suranna] mb-4">
                        Relive Your Special Moments, Page By Page
                    </h3>
                    <div className="text-lg leading-relaxed space-y-4 mb-8">
                        <p>
                            Your wedding day is filled with once-in-a-lifetime moments,
                            and we want to help you preserve them in a way that feels as
                            special as the day itself.
                        </p>
                        <p>
                            Our albums are designed not just to showcase photos but to tell your story—from the excitement
                            of the preparations to the joy of your ceremony and the
                            celebration that followed.
                        </p>
                    </div>
                    <section className="text-left my-20">
                        <Button className="py-4 px-12">Get Started</Button>
                    </section>
                </div>
                <div className="grid grid-cols-2 grid-row-1 md:w-1/2">
                    <img src="https://emilybelson.com/wp-content/uploads/sites/18567/2022/01/IMG_6214-scaled.jpg" alt="Image 3" className="row-span-2 col-2 w-full h-full object-cover " />
                    <img src="https://f.nooncdn.com/p/pzsku/ZAF6422BCB48C82D1AD46Z/45/_/1728369162/496a13a4-255b-43d3-8af0-03e01bbf89c8.jpg?width=240" alt="Image 4" className="row-span-2 w-full object-cover" />
                </div>
            </div>
        </section>
    </>
}

export default SpecialMoments