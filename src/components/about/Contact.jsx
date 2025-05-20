import { Button } from "../Card"

const Contact = () => {
    return <>
        <div className="py-12 px-48 bg-amber-100 bg-[url(bg.png)] text-center">
                <section className="mb-10">
                    <h4 className="text-3xl md:text-3xl text-amber-700 mb-4">CONTACT US</h4>
                    <h2 className="text-3xl md:text-4xl text-gray-700 font-[Suranna]">
                        Handcrafted With Love, Delivered With Care
                    </h2>
                </section>
                <section className="mt-10">
                    <p className="text-xl md:text-2xl text-gray-600 italic">
                        Every product from The Printable Store is handcrafted by experts who pour their heart into every detail. We promise fast and secure delivery so your memories arrive safely at your doorstep, ready to be cherished.
                    </p>
                </section>
                <Button className="mt-4 py-3 px-8">Contact Us</Button>
            </div>
    </>
}

export default Contact;