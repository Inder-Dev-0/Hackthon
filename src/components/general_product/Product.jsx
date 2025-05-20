import { Card, CardContent } from "../Card"

const Product = () => {

    const product = [
        {
            title: "Canvas Wall Art",
            price: "$29.9",
            img: "https://images-cdn.ubuy.co.in/649d24abd926672b5172c526-bedroom-canvas-wall-art-decor-black-gold.jpg"
        },
        {
            title: "Photo Gifts",
            price: "$29.9",
            img: "https://zocivoci.com/wp-content/uploads/2023/11/mo-heart-b-1-1024x1024.jpg"
        },
        {
            title: "Business Printing",
            price: "$29.9",
            img: "https://betweenboxes.in/cdn/shop/files/BookLover.jpg?v=1684155584"
        },
        {
            title: "Stationery & More",
            price: "$29.9",
            img: "https://m.media-amazon.com/images/I/81FrHdsJ0zL.jpg"
        },
        {
            title: "Canvas Wall Art",
            price: "$29.9",
            img: "https://i5.walmartimages.com/asr/df8cdd9c-bc40-4cea-a034-266d87cadf97.b0a9f49f209c21ff4083b4899a8b8f9c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        },
        {
            title: "Business Printing",
            price: "$29.9",
            img: "https://chapterclub.com.au/cdn/shop/files/20240502-134758.jpg?v=1714621796&width=1946"
        },
        {
            title: "Photo Gifts",
            price: "$29.9",
            img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-my-happy-place-personalized-arrangement-274288-m.jpg"
        },
        {
            title: "Stationery & More",
            price: "$29.9",
            img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-pull-up-photo-album-box-and-treats-personalized-birthday-gift-146204-1.jpg"
        },
        {
            title: "Canvas Wall Art",
            price: "$29.9",
            img: "https://m.media-amazon.com/images/I/81NQkHUzM-L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title: "Business Printing",
            price: "$29.9",
            img: "https://www.fnp.com/images/pr/l/v20230728191140/book-lover-gift-hamper-for-your-nerdy-friends_2.jpg"
        },
        {
            title: "Photo Gifts",
            price: "$29.9",
            img: "https://cdn.canvaschamp.in/media/catalog/product/cache/6fc071417fca3c80aad02cc52b2a7676/p/e/personalized-anniversary-crystal-photo-stand-preview-mockup.jpg"
        },
        {
            title: "Stationery & More",
            price: "$29.9",
            img: "https://images-cdn.ubuy.co.in/63670abdaf542f57cc63ea13-surprise-box-gifts-for-boyfriend-diy.jpg"
        },
    ]

    return <>
        <section className="py-16 bg-white text-center">
            <h2 className="text-5xl font-[Suranna] mb-4">Our Product Range</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {product.map((item, index) => (
                    <Card key={index}>
                        <CardContent className="p-4">
                            <img src={item.img} alt={item.title} className="rounded mb-2 w-full" />
                            <h3 className="text-md font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500">Starting From {item.price}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </>
}

export default Product;