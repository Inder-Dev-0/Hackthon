import AboutSection from "./about/AboutSection";
import CommitmentSection from "./about/CommitmentSection";
import Contact from "./about/Contact";
import MissionPage from "./about/Misson";
import PromiseSection from "./about/PromiseSection";
import StatsSection from "./about/StatsSection";
import Form from "./Form";

const AboutPage = () => {
    return <>
        <div className="font-sans bg-white text-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <AboutSection />
            <StatsSection />
        </div>
        <CommitmentSection />
        <MissionPage />
        <PromiseSection />
        <Contact />
        <Form />
    </>
}

export default AboutPage;