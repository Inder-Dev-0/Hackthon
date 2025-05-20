import { Button } from "../Card"

const CommitmentSection = () => {
    return <>
        <section className="my-20 max-w-6xl mx-auto">
            <div className="bg-amber-100 flex gap-5 rounded-xl p-8 md:p-12">
                <div className="text-lg content-center leading-relaxed space-y-4">
                    <h3 className="text-2xl md:text-2xl text-amber-700 mb-4">COMMITMENT</h3>
                    <h4 className="text-5xl font-[Suranna] mb-4">Our Commitment To Sustainability</h4>
                    <p>
                        We're dedicated to minimizing our environmental impact while delivering the highest quality products. Our eco-friendly printing process uses sustainably sourced materials and environmentally conscious packaging, so you can feel good about preserving your memories in a way that's kind to the planet.
                    </p>
                    <section className="text-center my-20">
                        <Button className="py-4 px-12">Get Started</Button>
                    </section>
                </div>
                <div className="grid grid-cols-2 grid-row-1">
                    <img src="https://i.pinimg.com/originals/6b/0b/5a/6b0b5a8959c1945d475f1db5667e45ed.jpg" alt="Image 3" className="row-span-2 col-2 w-full h-full object-cover " />
                    <img src="https://www.pressrelease.com/files/4e/f8/de98ca4fca75832cef70ae5d203c.jpg" alt="Image 4" className="row-span-2 w-full object-cover" />
                </div>
            </div>
        </section>
    </>
}

export default CommitmentSection;