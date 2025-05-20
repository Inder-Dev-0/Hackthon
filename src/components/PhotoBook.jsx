import BestsellerSection from "./general_product/BestsellerSection"
import PhotobooksProducts from "./photo_book/PhotoBookProduct"
import SpecialMoments from "./photo_book/SpecialMoments"
import CaptureMoment from "./wedding_album/CaptureMoment"
import CustomerFeedback from "./wedding_album/CustomerFeedback"
import FAQ from "./wedding_album/FAQ"
import Features from "./photo_book/Features"
import ProcessSection from "./photo_book/ProcessSection"
import PhotobookGallery from "./photo_book/PhotoBookGallery"

const PhotoBook = () => {
    return <>
        <section className="relative bg-amber-100 bg-[url(bg.png)] py-20 px-4 text-center">
            <div className="max-w-6xl mb-16 mx-auto">
                <h1 className="text-2xl md:text-xl text-amber-700 mb-4">PHOTOBOOKS</h1>
                <h2 className="text-5xl font-[Suranna] mb-4">Beautifully Crafted Photobooks</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our photobooks are designed to celebrate life's special occasions, from vacations and family gatherings to anniversaries and milestones.
                </p>
            </div>
            <div className="w-full max-w-6xl m-auto h-100 bg-[url(https://printingstudio.in/cdn/shop/files/family-photo-album-spring-weekend_18dd8a5c-8fdd-43a0-90b3-25c3bdae244f.jpg?v=1710311425&width=1946)] bg-cover bg-center rounded-lg duration-300"></div>
        </section>
        <PhotobooksProducts />
        <SpecialMoments />
        <Features />
        <ProcessSection />
        <PhotobookGallery />
        <BestsellerSection />
        <CustomerFeedback />
        <CaptureMoment />
        <FAQ />
    </>
}

export default PhotoBook