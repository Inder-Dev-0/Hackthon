import { Button } from '../Card';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Newsletter = () => {
    return <>
        <section className="flex justify-center max-w-8xl pl-[90px] bg-gray-100 py-16 px-20 text-center">
            <div className="max-w-5xl mx-auto text-left border-e-2 pr-[34px] pl-[55px]">
                <h2 className="text-5xl font-[Suranna] text-gray-900 mb-4">Join Our Newsletter</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Get exclusive access to special offers, the latest product updates, and inspiration for your next album or photobook.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md">
                    <input
                        type="email"
                        placeholder="Enter"
                        className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
                    />
                    <Button>Subscribe</Button>
                </div>
            </div>
            <div className="max-w-3xl mx-auto pl-[45px] text-left">
                <h2 className="text-5xl font-[Suranna] text-gray-900 mb-7">Follow Us To Unlock Exclusive Discounts!</h2>
                <div className="flex gap-4 text-xl">
                    <a href="#" className="text-amber-600 text-4xl font-bold hover:text-amber-700 transition-colors"><FaFacebookF /></a>
                    <a href="#" className="text-amber-600 text-4xl font-bold hover:text-amber-700 transition-colors"><FaYoutube /></a>
                    <a href="#" className="text-amber-600 text-4xl font-bold hover:text-amber-700 transition-colors"><FaLinkedinIn /></a>
                    <a href="#" className="text-amber-600 text-4xl font-bold hover:text-amber-700 transition-colors"><FaInstagram /></a>
                </div>
            </div>
        </section>
    </>
}

export default Newsletter;