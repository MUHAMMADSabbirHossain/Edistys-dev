import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <header>
                <nav></nav>
            </header>

            <main>
                <h1>Root</h1>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Root;