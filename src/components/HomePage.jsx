import PrintableStore from "./PrintableStore";
import Form from "./Form";
import Newsletter from "./home/NewsletterSection"
import HeroSection from "./home/HeroSection";
import Stories from "./home/Stories";
import ChooseUs from "./home/ChooseUs";
import CollectionSection from "./home/CollectionSection";
import ServiceSection from "./home/ServiceSection";

const HomePage = () => {
    return <>
        <HeroSection />
        <Stories />
        <ChooseUs />
        <CollectionSection />
        <ServiceSection />
        <PrintableStore />
        <Form />
        <Newsletter />
    </>
}

export default HomePage;