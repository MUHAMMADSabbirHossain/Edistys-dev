import F3 from "../assets/FutureFinance/finance-3.png";
import F1 from "../assets/FutureFinance/finance-1.png";
import F2 from "../assets/FutureFinance/finance-2.svg";
import FinanceImg from "../assets/FutureFinance/finance-figure-svg1.svg";
import FinanceMainImg from "../assets/FutureFinance/finance.png";

const FutureFinance = () => {
    return (
        <section className="w-full bg-[#FFF] mx-auto flex items-center justify-center  flex-col  mt-10">
            <div className="lg:max-w-[1200px] w-full flex justify-between relative  lg:flex-row lg:px-10 xl:px-0 px-0 gap-5 lg:gap-0 lg:items-start flex-col items-center my-20">
                <div className="lg:w-1/2 text-center lg:text-start">
                    <h1 className="text-base font-bold leading-[24px] montserrat-font text-[#1f80f0] px-10 lg:px-0">
                        POWERING THE FUTURE OF FINANCE
                    </h1>
                    <h2 className="text-[56px] font-semibold leading-[62px]  montserrat-font text-[#0b305b] pt-6 px-10 lg:px-0">
                        Uncovering new ways to delight customers
                    </h2>
                    <h6 className="font-bold text-base leading-[26px] text-[#164377] inter-font my-5 lg:block hidden">
                        AnyTech is revolutionising financial technology by introducing
                        innovative and real-time transaction account processing
                        capabilities, specifically designed for retail financial services.
                    </h6>
                    <p className="inter-font font-normal text-base leading-[26px] text-[#164377] lg:block hidden">
                        Our modern approach surpasses traditional banking and card
                        processing systems, empowering you with the most advanced technology
                        for lasting success.
                    </p>
                </div>
                <div className=" relative ">
                    <img
                        className="absolute w-[115px] h-[114px] -right-0 top-20 object-contain shadow-2xl  z-50 "
                        src={F1}
                        alt="Finance"
                    />
                    <img
                        className="absolute w-[73px] h-[73px] lg:left-7 lg:top-[150px] object-contain shadow-2xl z-50 sm:top-14 top-14 left-5  md:top-20 md:left-14"
                        src={F2}
                        alt="Finance"
                    />
                    <img
                        className="absolute w-[87px] h-[86px] lg:left-[140px] lg:top-[240px] object-contain shadow-2xl z-50  sm:top-[140px] top-[140px] left-20 sm:left-20 md:top-[220px] md:left-[180px] "
                        src={F3}
                        alt="Finance"
                    />
                    <div>
                        <img
                            className="lg:w-[550px]  h-[400px] lg:h-[600px] md:h-[600px] object-cover  relative z-10"
                            src={FinanceImg}
                            alt="Finance"
                        />
                        <img
                            className="lg:w-[426px] md:w-[426px] w-[317px] absolute h-[301px] lg:h-[517px] md:h-[517px] object-contain lg:shadow-2xl z-20 top-10 right-14 xs:right-5 rounded-4xl"
                            src={FinanceMainImg}
                            alt="Finance"
                        />
                    </div>
                </div>
                <div className="lg:hidden md:fle flex-col px-5 md:px-0 max-w-[500px]  ml-5">
                    <h6 className="font-bold text-base leading-[26px] text-[#164377] inter-font my-5 ">
                        AnyTech is revolutionising financial technology by introducing
                        innovative and real-time transaction account processing
                        capabilities, specifically designed for retail financial services.
                    </h6>
                    <p className="inter-font font-normal text-base leading-[26px] text-[#164377] ">
                        Our modern approach surpasses traditional banking and card
                        processing systems, empowering you with the most advanced technology
                        for lasting success.
                    </p>
                </div>
            </div>
            <div className="w-full h-[212px] opacity-15 ">
                <svg
                    className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]"
                    preserveAspectRatio="xMidYMid slice"
                    viewBox="0 0 1920 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.7"
                        d="M0 0H1920L0 280V0Z"
                        fill="url(#paint0_linear)"
                    ></path>
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="960"
                            y1="280"
                            x2="960"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#1F80F0"></stop>
                            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default FutureFinance;