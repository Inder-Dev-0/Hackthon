import { Button } from "../Card";

const HeroSection = () => {
    return <>
        <section className="bg-white py-12 px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                <div className="text-left flex flex-col justify-center">
                    <h1 className="text-6xl font-[Suranna] mb-4">Preserve Your Precious Moments with Elegance</h1>
                    <p className="mb-6">Beautifully Crafted Wedding Albums and Print-On-Demand Products to Celebrate Life’s Special Occasions.</p>
                    <Button className="w-max">Order Album Now</Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <img src="https://www.wedding.film/wp-content/uploads/2020/12/Reverent-Weddings-The-Best-Wedding-Videography.jpg" alt="Image 1" className="row-span-1 w-full object-cover rounded" />
                    <img src="https://img.freepik.com/premium-photo/international-wedding-couple-european-bride-asian-groom-walk-around-city-together_1429-7965.jpg?w=360" alt="Image 2" className="row-span-2 w-full object-cover rounded" />
                    <img src="https://jennyfu.com/wp-content/uploads/2019/10/jennyfustudio_destination_bali_wedding_jj_0027.jpg" alt="Image 3" className="row-span-2 w-full h-full object-cover rounded" />
                    <img src="https://eliaskordelakos.com/wp-content/uploads/sites/14206/2023/09/best-wedding-venues-in-Athens-Greece-Grand-Resort-Lagonissi-46-1.jpg" alt="Image 4" className="row-span-2 w-full object-cover rounded" />
                    <img src="https://todaysbride.com/wp-content/uploads/2019/02/00291-Ariel-International-Wedding-Photos.jpg" alt="Image 5" className="row-span-2 w-full object-cover rounded he" />
                </div>
            </div>
            <div className="flex justify-around mt-12 text-center font-[Suranna] max-w-7xl mx-auto">
                <div><div className="text-6xl">2500+</div><div>Albums Delivered</div></div>
                <div><div className="text-6xl">860+</div><div>Weddings</div></div>
                <div><div className="text-6xl">1800</div><div>Happy Clients</div></div>
                <div><div className="text-6xl">2k+</div><div>Reviews</div></div>
            </div>
        </section>
    </>
}

export default HeroSection;