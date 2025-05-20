import { Button } from "../Card";

const CaptureMoment = () => {
    return <>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-amber-100 text-center bg-[url(https://cdn.sanity.io/images/pn4rwssl/production/ff3e51e96e9c4a3f0fe8e30b86846b9bb10c9353-2048x1363.jpg?rect=116,0,1817,1363&w=2880&h=2160&q=75&auto=format)] bg-cover text-white rounded-xl p-8 md:p-20">
                <h3 className="text-5xl font-[Suranna] mb-6">Capture Every Moment In Style</h3>
                <div className="text-lg leading-relaxed space-y-4 mb-8">
                    <p>
                        At The Printable Store, we believe your wedding albums should be as unique as your love story. We offer a wide range of customization options to help you create an album that truly reflects the essence of your special day.
                    </p>
                    <p>
                        From the elegant cover materials to the personalized layouts, every detail is crafted with care.
                    </p>
                </div>
                <Button>Contact Us</Button>
            </div>
        </section>
    </>
}

export default CaptureMoment;