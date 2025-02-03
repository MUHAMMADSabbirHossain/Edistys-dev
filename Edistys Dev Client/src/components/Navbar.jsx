import { Link } from "react-router-dom";
import anyTechIcon from "../assets/anyTechIcon.svg"
import { useEffect, useRef, useState } from "react";

const Navbar = () => {

    const navbarItems = <>
        <li>
            <details>
                <summary>Solutions</summary>
                <ul className="p-2 space-y-5 w-30">
                    <li><Link className="mx-auto px-5">Any BaaS</Link></li>
                    <li><Link className="mx-auto px-5">Any CaaS</Link></li>
                    <li><Link className="mx-auto px-5">Any PaaS</Link></li>
                </ul>
            </details>
        </li>
        <li><Link to={"/services"}>Services</Link></li>
        <li><Link to={"/about"}>About</Link></li>
    </>;
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
            setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={`fixed top-0 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
            } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                            {navbarItems}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn bg-blue-500 text-xl"><img src={anyTechIcon} alt="anyTechIcon" className="w-40" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbarItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/contact"} className="btn btn-outline">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;