import { Button } from "../Card";

const PromiseSection = () => {
    return <>
        <section className="my-20 max-w-6xl mx-auto">
            <div className="bg-amber-100 flex gap-5 rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-2 grid-row-1">
                    <img src="https://americajosh.com/wp-content/uploads/2020/04/Not-every-bride-gets-an-international-wedding-dress-but-this-one-did.jpg" alt="Image 3" className="row-span-2 col-2 w-full h-full object-cover " />
                    <img src="https://i.pinimg.com/474x/2c/9f/3e/2c9f3e66ebbedfabed304ba8c5a06ff8.jpg" alt="Image 4" className="row-span-2 w-full object-cover" />
                </div>
                <div className="text-lg content-center leading-relaxed space-y-4">
                    <h3 className="text-2xl md:text-2xl text-amber-700 mb-4">OUR PROMISE</h3>
                    <h4 className="text-5xl font-[Suranna] mb-4">Our Commitment To Sustainability</h4>
                    <p>
                        We are committed to delivering products that exceed your expectations. From the moment you begin designing your custom piece to the day it arrives at your doorstep, our team is here to ensure a seamless experience, providing assistance at every step.
                    </p>
                    <p>
                        Your satisfaction is our top priority, and we stand behind the quality of our work.
                    </p>
                    <section className="text-center my-20">
                        <Button className="py-4 px-12">Get Started</Button>
                    </section>
                </div>
            </div>
        </section>
    </>
}

export default PromiseSection;