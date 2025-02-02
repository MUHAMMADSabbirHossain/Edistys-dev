import { Link } from "react-router-dom";
import legacyBgImg from "../assets/backgrounds/WaveLinesDesktop3.svg";
const Legacy = () => {
    return (
        <section className="bg-blue-500" style={{
            clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
        }}>

            <div className="space-y-10 px-10 py-20" style={{ backgroundImage: `url(${legacyBgImg})` }}>
                <h1 className="text-4xl sm:text-6xl  font-semibold text-[#FFF]">Legacy no longer</h1>
                <p className="text-2xl font-normal text-[#FFF]">
                    Talk to us to find out how we can transform your organisation for the future</p>

                <Link to="/contact">
                    <button className="bg-[#FE8B53] px-10 py-3 rounded-md text-white font-semibold inter-font text-lg hover:bg-[#ff894e] transition">Contact Us {`>`}</button>
                </Link>
            </div>
        </section>
    );
};

export default Legacy;