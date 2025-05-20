import AboutSect from "./wedding_album/AboutSect";
import CaptureMoment from "./wedding_album/CaptureMoment";
import ChooseAlbum from "./wedding_album/ChooseOurAlbum";
import CustomerFeedback from "./wedding_album/CustomerFeedback";
import FAQ from "./wedding_album/FAQ";
import Memories from "./wedding_album/Memories";
import Process from "./wedding_album/Process";
import WeddingGallery from "./wedding_album/WeddingGallery";

const WeddingAlbum = () => {
    return <>
        <Memories />
        <AboutSect />
        <ChooseAlbum />
        <section className="relative py-20 px-4 text-center">
            <div className="w-full max-w-7xl m-auto h-120 bg-[url(https://cdn0.weddingwire.in/vendor/7227/3_2/960/jpg/img-20180130-wa0067_15_307227-158918368710966.jpeg)] bg-cover bg-bottom rounded-lg duration-300"></div>
        </section>
        <Process />
        <WeddingGallery />
        <CustomerFeedback />
        <CaptureMoment />
        <FAQ />
    </>
}

export default WeddingAlbum;