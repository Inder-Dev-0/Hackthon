import BestsellerSection from "./general_product/BestsellerSection";
import PrintOnDemand from "./general_product/PrintOnDemand";
import Product from "./general_product/Product";

const GeneralProductPage = () => {
    return <>
        <div className="font-sans bg-white text-gray-800 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <PrintOnDemand />
            <div className="w-full h-100 bg-[url(https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/whatsapp-image-2020-10-09-at-09.46.18-2-BJuTRYpIw/bali-indah-catering_international-wedding-of-andryan-calandra_1.jpg)] bg-center mb-15 rounded-lg duration-300"></div>
            <Product />
            <BestsellerSection />
        </div>
    </>
}

export default GeneralProductPage;