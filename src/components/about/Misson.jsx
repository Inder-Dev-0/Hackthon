import React from 'react';
import { Button } from '../Card';

const MissionPage = () => {
    return (
        <div className="font-sans bg-white text-gray-800 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <section className="mb-20 bg-[url(bg.png)] bg-amber-100 text-center pt-6 mb-16">
                <h1 className="text-2xl md:text-2xl text-amber-700 mb-4">MISSION</h1>
                <h2 className="text-5xl font-[Suranna] mb-4">Our Mission</h2>
                <div className="max-w-5xl mx-auto text-gray-700 text-xl mb-6">
                    <p>
                        Our mission is simple: to help you preserve and relive meaningful moments with high quality, customized products. We aim to provide a seamless experience from design to delivery, making it easy for you to turn your photos into professional-grade keepsakes.
                    </p>
                    <p>
                        Every order is handled with care, ensuring your memories are in safe hands.
                    </p>
                </div>
                <div className="text-center">
                    <Button className="py-4 px-12">Get Started</Button>
                </div>
                <div className="border-t border-gray-200 my-12"></div>
            </section>
        </div>
    );
};

export default MissionPage;