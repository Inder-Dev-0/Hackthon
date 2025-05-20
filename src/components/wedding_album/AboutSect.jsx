import { Button } from "../Card";

const AboutSect = () => {
    return <>
        <div className="max-w-6xl mx-auto px-5 py-8 font-sans text-left">
             
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                            <img src="https://yi-files.yellowimages.com/products/796000/796136/1357905-full.jpg" alt="" className=' w-full h-full object-cover rounded' />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-lg content-start leading-relaxed space-y-4">
                        <h3 className="text-2xl md:text-2xl text-amber-700 mb-4">About Our Wedding Albums</h3>
                        <h4 className="text-5xl font-[Suranna] mb-4">Memories You Can Hold Onto Forever</h4>
                        <p>
                            Your wedding day is filled with once-in-a-lifetime moments, and we want to help you preserve them in a way that feels as special as the day itself. Our albums are designed not just to showcase photos but to tell your story—from the excitement of the preparations to the joy of your ceremony and the celebration that followed.
                        </p>
                         
                        <section className="text-left my-5">
                            <Button className="py-4 px-12">Get Started</Button>
                        </section>
                    </div>
                </div>
            </section>

             
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 text-lg content-start leading-relaxed space-y-4">
                        <h3 className="text-2xl md:text-2xl text-amber-700 mb-4">Vision of Wedding Albums</h3>
                        <h4 className="text-5xl font-[Suranna] mb-4">Tailored to Your Vision</h4>
                        <p>
                            No two love stories are the same, and neither should be your wedding album. That’s why we offer an array of customizations to make sure your album reflects your unique journey. From page textures to personalized text, every choice you make adds a personal touch.
                        </p>
                         
                        <section className="text-left my-5">
                            <Button className="py-4 px-12">Get Started</Button>
                        </section>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                            <img src="https://cdn0.weddingwire.in/article/7362/original/1280/jpg/102637-indian-wedding-album-design-16.jpeg" alt="" className=' w-full h-full object-cover rounded' />
                        </div>
                    </div>
                </div>
            </section>

             
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                            <img src="https://www.slrlounge.com/wp-content/uploads/2022/01/pexels-ron-lach-10302633.jpg" alt="" className=' w-full h-full object-cover rounded' />
                        </div>
                    </div>
                    <div className="md:w-1/2 text-lg content-start leading-relaxed space-y-4">
                        <h3 className="text-2xl md:text-2xl text-amber-700 mb-4">Wedding Albums</h3>
                        <h4 className="text-5xl font-[Suranna] mb-4">The Grandeur Wedding Album</h4>
                        <p>
                            This oversized album offers ample space for all your cherished memories. With thick, glossy pages and intricate custom engraving, it’s a show-stopping way to commemorate your special day in grand style.
                        </p>
                         
                        <section className="text-left my-5">
                            <Button className="py-4 px-12">Get Started</Button>
                        </section>
                    </div>
                </div>
            </section>
        </div> 
    </>
}

export default AboutSect;