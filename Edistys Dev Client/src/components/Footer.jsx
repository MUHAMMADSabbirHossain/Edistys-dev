import anyTechIcon from "../assets/anyTechIcon.svg"
import { Link } from "react-router-dom";
import Phn from "../assets/icons/phn.webp"
import Msg from "../assets/icons/msg.webp"
import Linkedin from "../assets/icons/linkedin.webp"

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#002044] flex w-full items-center justify-center py-16 border-b border-[#174377] xl:px-0 lg:px-10">
                <div className="w-[1200px] flex sm:gap-10 justify-center items-center lg:justify-between ">
                    <div>
                        <Link to={"/"}><img src={anyTechIcon} alt="AnyTech Logo" /></Link>
                    </div>
                    <div className="lg:block hidden">
                        <Link
                            href="#"
                            className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 border-r border-[#1f80f0]"
                        >
                            Our Solutions
                        </Link>
                        <Link
                            href="#"
                            className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 "
                        >
                            AnyCaaS
                        </Link>
                        <Link
                            href="#"
                            className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 "
                        >
                            AnyBaaS
                        </Link>
                        <Link
                            href="#"
                            className="text-[#00e9ea] font-semibold text-base leading-[26px] inter-font px-4 ">AnyPaaS</Link>
                    </div>
                    <div className="lg:hidden flex items-center gap-5">
                        <Link href="#">
                            <img
                                className=" object-contain w-6 h-6 "
                                src={Msg}
                                alt="Message"
                            />
                        </Link>
                        <Link href="#">
                            <img
                                className=" object-contain w-6 h-6 "
                                src={Phn}
                                alt="Message"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/muhammadbinahmad/">
                            <img
                                className=" object-contain w-6 h-6 "
                                src={Linkedin}
                                alt="Message"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <section className="footer md:footer-horizontal bg-base-300 p-4 text-blue-400 font-bold">
                <aside>
                    <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved by Any Technology Pte Ltd.</p>
                </aside>

                <aside className="mx-auto">
                    <Link to={"/privacy-policy"}><p className="">Privacy Policy</p></Link>
                </aside>
            </section>
        </footer>
    );
};

export default Footer;