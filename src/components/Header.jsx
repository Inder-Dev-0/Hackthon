import { Link, useLocation } from "react-router";
import { Button } from "./Card"

const Header = () => {

    const { pathname } = useLocation();

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about-us" },
        { label: "General Product", path: "/general-product" },
        { label: "Contact", path: "/contact" },
        { label: "Wedding Album", path: "/wedding-album" },
        { label: "Photo Book", path: "/photo-book" },
    ];

    return <>
        <div className="bg-yellow-100 text-center py-2 text-sm text-yellow-800">
            Wedding Albums | Photobooks | Guest Books | Free Shipping on Orders Over $150
        </div>

        <header className="bg-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Printable Store</div>
            <nav className="space-x-4 flex">
                {navItems.map((item) => (
                    <li
                        key={item.path}
                        className={`list-none ${pathname === item.path ? "text-amber-600 font-semibold" : "text-gray-700"
                            } hover:underline`}
                    >
                        <Link to={item.path} className="hover:underline">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </nav>
            <Button>Order Now</Button>
        </header>
    </>
}

export default Header;