import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className="">
                <div className="h-20"></div>
                <h1 className="">Root</h1>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Root;