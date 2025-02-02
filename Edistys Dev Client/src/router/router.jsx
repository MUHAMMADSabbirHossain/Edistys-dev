import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import NotFound from "../pages/NotFound/NotFound";
import Root from "../layouts/root";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Solutions from "../pages/Solutions/Solutions";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/solutions",
                element: <Solutions />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ]
    },

]);

export default router;