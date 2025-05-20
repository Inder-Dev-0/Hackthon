import { Card, CardContent } from "../Card";

const ChooseUs = () => {
    return <>
        <section className="py-16 bg-amber-100 bg-[url(bg.png)] text-center">
            <h4 className="text-2xl md:text-2xl text-amber-700 mb-4">WHY CHOOSE US</h4>
            <h2 className="text-5xl font-[Suranna] mb-2">Why Choose The Printable Store?</h2>
            <p className="max-w-5xl mx-auto text-gray-700 text-xl mb-6">The Printale Difference: Quality, Personalization, and Care</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
                        <p>Each album is meticulously crafted by professionals using premium materials.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Personalized Designs</h3>
                        <p>Tailored layouts that tell your story with elegance and creativity.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                        <p>Receive your albums quickly without compromising on quality.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    </>
}

export default ChooseUs;