import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer md:footer-horizontal bg-base-300 p-4 text-blue-400 font-bold">
            <aside>
                <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved by Any Technology Pte Ltd.</p>
            </aside>

            <aside className="mx-auto">
                <Link to={"/privacy-policy"}><p className="">Privacy Policy</p></Link>
            </aside>
        </footer>
    );
};

export default Footer;