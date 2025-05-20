import { Button, Card, CardContent } from "../Card"

const CollectionSection = () => {
    return <>
        <section className="py-16 bg-white text-center">
            <h4 className="text-2xl md:text-2xl text-amber-700 mb-4">ALBUMS COLLECTION</h4>
            <h2 className="text-4xl md:text-5xl font-[Suranna] text-gray-800 uppercase tracking-wide">Wedding Albums Collection</h2>
            <p className="text-3xl md:text-xl text-gray-700 mb-8 mt-5">Flexible Design Options, Sizes, Photobooks and more!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card>
                    <CardContent className="p-6 text-center">
                        <img src="https://i.etsystatic.com/36750386/r/il/edf442/4454805029/il_fullxfull.4454805029_fc3j.jpg" alt="Wedding Day Album" className="rounded mb-4" />
                        <h3 className="text-xl font-[Suranna]">Wedding Day Album</h3>
                        <p className="text-gray-700 mb-8 mt-5">Preserve the memories of your special day with our beautifully crafted wedding albums.</p>
                        <Button className="mt-2">Shop Now</Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <img src="https://online.visual-paradigm.com/repository/images/74ae7f9f-d7c3-4cd2-bbc7-3e670ca25493/wedding-photo-books-design/romantic-wedding-anniversary-photo-book.png" alt="Photo Book" className="rounded mb-4" />
                        <h3 className="text-xl font-[Suranna]">Photo Books</h3>
                        <p className="text-gray-700 mb-8 mt-5">From family vacations to milestone celebrations, our photobooks offer a perfect way to capture life’s unforgettable moments.</p>
                        <Button className="mt-2">Shop Now</Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDVSr5ePmdd41YRjdTpwf7tGqLBQuHQgbAA&s" alt="Guest Book & Keepsake" className="rounded mb-4" />
                        <h3 className="text-xl font-[Suranna]">Guest Book & Keepsake</h3>
                        <p className="text-gray-700 mb-8 mt-5">Turn your photos and designs into stunning, custom products with our print-on-demand services.</p>
                        <Button className="mt-2">Shop Now</Button>
                    </CardContent>
                </Card>
            </div>
        </section>
        
        <div className="py-12 bg-amber-100 bg-[url(bg.png)] text-center">
            <section className="mb-10">
                <h2 className="text-3xl md:text-4xl text-gray-700 mb-2 font-[Suranna]">
                    Start Designing Your Wedding Album Or
                </h2>
                <h2 className="text-3xl md:text-4xl text-gray-700 font-[Suranna]">
                    Protealook Today!
                </h2>
            </section>
            <section className="mt-10">
                <p className="text-xl md:text-2xl text-gray-600 italic">
                    Choose from our wide range of custmoizable options and create something truly special that will last a lifetime.
                </p>
            </section>
            <Button className="mt-4">Get Started</Button>
        </div>
    </>
}

export default CollectionSection