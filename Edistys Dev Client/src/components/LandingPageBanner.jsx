import { Link } from "react-router-dom";
import landingPageWoman from "../assets/humans/landingPageWomen-7952x5304.avif";
import 'animate.css';

const LandingPageBanner = () => {
    return (
        <section className=" overflow-x-hidden" >

            {/* small screens banner  */}
            <div className="flex flex-col lg:hidden  w-full min-h-screen relative overflow-x-hidden">
                <div className="bg-[#005BC4] min-h-screen w-full relative flex items-center justify-center ">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-white z-30"
                        style={{
                            clipPath: "polygon(200% 70%, 110% -1050%, 90% 1400%, -1% 100%)",
                        }}
                    ></div>

                    {/* bg glossy image */}
                    <div className="w-full h-full">
                        <svg
                            className="lg:hidden absolute top-0 left-0  mw-[100%] h-[65%] object-cover"
                            preserveAspectRatio="xMidYMid slice"
                            viewBox="0 0 797 645"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="hero-background-mobile">
                                <g
                                    id="dark"
                                    style={{
                                        transform: "translate3d(0%, 0.005%, 0px)",
                                        transition:
                                            "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    }}
                                >
                                    <g id="Group" style={{ mixBlendMode: "multiply" }}>
                                        <path
                                            id="Vector"
                                            d="M797 437.791V345L497 645H589.791L797 437.791Z"
                                            fill="url(#paint0_linear_6_180)"
                                        />
                                    </g>
                                    <g id="Group_2" style={{ mixBlendMode: "multiply" }}>
                                        <path
                                            id="Vector_2"
                                            d="M409.788 305V109.212L0 519.004H195.789L409.788 305Z"
                                            fill="url(#paint1_linear_6_180)"
                                        />
                                    </g>
                                    <g id="Group_3" style={{ mixBlendMode: "multiply" }}>
                                        <path
                                            id="Vector_3"
                                            d="M684 365.595V0L39 644.991H404.596L684 365.595Z"
                                            fill="url(#paint2_linear_6_180)"
                                        />
                                    </g>
                                </g>
                                <g
                                    id="light"
                                    clipPath="url(#clip0_6_180)"
                                    style={{
                                        transform: "translate3d(0%, 0.025%, 0px)",
                                        transition:
                                            "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    }}
                                >
                                    <g id="Group_4" filter="url(#filter0_f_6_180)">
                                        <path
                                            id="Vector_4"
                                            d="M684 272.067V200L451 433H523.068L684 272.067Z"
                                            fill="url(#paint3_linear_6_180)"
                                        />
                                    </g>
                                    <g id="Group_5" filter="url(#filter1_f_6_180)">
                                        <path
                                            id="Vector_5"
                                            d="M706.1 69L485 290.1H500.8L706.1 84.8V69Z"
                                            fill="url(#paint4_linear_6_180)"
                                        />
                                    </g>
                                    <g id="Group_6" filter="url(#filter2_f_6_180)">
                                        <path
                                            id="Vector_6"
                                            d="M111 313H284L111 486V313Z"
                                            fill="url(#paint5_linear_6_180)"
                                        />
                                        <path
                                            id="Vector_7"
                                            d="M111 313H284L111 486V313Z"
                                            fill="url(#paint6_linear_6_180)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_6_180"
                                    x="420"
                                    y="169"
                                    width="295"
                                    height="295"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="15.5"
                                        result="effect1_foregroundBlur_6_180"
                                    />
                                </filter>
                                <filter
                                    id="filter1_f_6_180"
                                    x="473"
                                    y="57"
                                    width="245.1"
                                    height="245.1"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="6"
                                        result="effect1_foregroundBlur_6_180"
                                    />
                                </filter>
                                <filter
                                    id="filter2_f_6_180"
                                    x="78"
                                    y="280"
                                    width="239"
                                    height="239"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="16.5"
                                        result="effect1_foregroundBlur_6_180"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_6_180"
                                    x1="366"
                                    y1="923"
                                    x2="707"
                                    y2="519.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0" />
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_6_180"
                                    x1="-276.407"
                                    y1="1105.58"
                                    x2="443.103"
                                    y2="254.197"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0" />
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_6_180"
                                    x1="971.501"
                                    y1="1062"
                                    x2="401"
                                    y2="388.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0" />
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient
                                    id="paint3_linear_6_180"
                                    x1="408.636"
                                    y1="452.001"
                                    x2="678.393"
                                    y2="221.805"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA" />
                                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                                </linearGradient>
                                <linearGradient
                                    id="paint4_linear_6_180"
                                    x1="444.8"
                                    y1="308.131"
                                    x2="700.779"
                                    y2="89.6911"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA" />
                                    <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49" />
                                </linearGradient>
                                <linearGradient
                                    id="paint5_linear_6_180"
                                    x1="111"
                                    y1="399.15"
                                    x2="284"
                                    y2="399.15"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient
                                    id="paint6_linear_6_180"
                                    x1="6.9711"
                                    y1="513.992"
                                    x2="251.76"
                                    y2="258.952"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA" />
                                    <stop offset="1" stopColor="#1F80F0" />
                                </linearGradient>
                                <clipPath id="clip0_6_180">
                                    <rect
                                        width="641"
                                        height="462"
                                        fill="white"
                                        transform="translate(78 57)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>


                    <div className=" absolute xs:top-[200px] max-w-[576px] p-10 xs:px-5 sm:px-5">
                        <h1 className="text-5xl sm:text-7xl leading-[64px] font-semibold text-[#FFF]">Embrace the future of finance
                        </h1>
                        <p className="montserrat-font text-base font-semibold  text-[#FFF] my-5">
                            Reimagine financial services with AnyTech{`'`}s open platform,
                            distributed banking solution that powers transformation
                        </p>

                        <Link to="/contact">
                            <button className="bg-[#FE8B53] px-10 py-3 rounded-md text-white font-semibold inter-font text-lg hover:bg-[#ff894e] transition">Reach Out to Us</button>
                        </Link>
                    </div>
                </div>

                {/* TODO: this component needs to be removed */}
                {/* <div className="absolute -bottom-60 z-20 h-[50%] w-full "
                            style={{
                                clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
                            }}>
                            <img
                                className="object-cover w-full h-full"
                                src={landingPageWoman}
                                alt="Banner" />
                        </div> */}

                {/* woman image */}
                <img src={landingPageWoman} alt="landing pase banner" className="absolute top-[650px] sm:top-[650px] z-30 animate__animated animate__fadeInUp animate__slow" style={{
                    clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)",
                }} />
            </div>









            {/* lerger screen banner  */}
            <div className="hidden lg:block  w-full max-h-screen ">
                <div className=" w-full flex-col flex justify-center items-center relative overflow-hidden bg-[#1F80F0]">

                    <div className="banner-container h-screen w-full relative ">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-white z-30"
                            style={{
                                clipPath: "polygon(200% 70%, 110% -1050%, 90% 1400%, -1% 100%)",
                            }}
                        ></div>
                    </div>


                    <div className="max-w-[1150px] min-w-[992px flex items-start justify-start absolute top-[130px] lg:left-10 xl:left-10 xxl:left-[130px] 3xl:left-[200px] 4xl:left-[200px] largest:left-[250px] z-50   animate__animated animate__fadeIn animate__slow">
                        <div className="">
                            <h1 className="font-semibold  lg:text-[40px] xl:text-[80px] xl:leading-[80px] text-[#FFF]">
                                Embrace the <br />
                                future of finance
                            </h1>
                            <p className="montserrat-font text-base font-semibold leading-[26px] text-[#FFF] my-5">
                                Reimagine financial services with AnyTech{`'`}s open platform,
                                distributed <br /> banking solution that powers transformation
                            </p>
                            <button className="bg-[#FE8B53] px-10 py-3 rounded-md text-white font-semibold inter-font text-lg hover:bg-[#ff894e] transition">Reach Out to Us</button>
                        </div>
                    </div>

                    {/* bg glossy image */}
                    <div className="absolute top-0 left-0 w-full h-full z-30 animate__animated animate__fadeInLeft animate__slow">
                        <svg
                            className="hidden lg:block absolute h-full w-full object-cover inset-0 z-40"
                            width="1920"
                            height="929"
                            viewBox="0 0 1920 929"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="hero-background-desktop">
                                <g
                                    id="background"
                                    style={{
                                        transform: "translate3d(0.535714%, 1.15586%, 0px)",
                                        transition:
                                            "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                        "--motion-translateX": "0px",
                                        "--motion-translateY": "0px",
                                    }}
                                >
                                    <g
                                        id="Vector"
                                        style={{
                                            mixBlendMode: "multiply",
                                        }}
                                    >
                                        <path
                                            d="M668 23.4954V-382L-643 929H-237.504L668 23.4954Z"
                                            fill="url(#paint0_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g
                                        id="Vector_2"
                                        style={{
                                            mixBlendMode: "multiply",
                                        }}
                                    >
                                        <path
                                            d="M1195 -226.405V-592L13 590H378.596L1195 -226.405Z"
                                            fill="url(#paint1_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g
                                        id="Vector_3"
                                        style={{
                                            mixBlendMode: "multiply",
                                        }}
                                    >
                                        <path
                                            d="M1011 -629.405V-995L-171 187H194.596L1011 -629.405Z"
                                            fill="url(#paint2_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g
                                        id="Vector_4"
                                        style={{
                                            mixBlendMode: "multiply",
                                        }}
                                    >
                                        <path
                                            d="M313 -161.212V-357L-320 276H-124.211L313 -161.212Z"
                                            fill="url(#paint3_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g id="Vector_5">
                                        <path
                                            d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                                            fill="url(#paint4_linear_132_3263)"
                                        ></path>
                                        <path
                                            d="M396.6 -357L-76 115.6H-42.2001L396.6 -323.2V-357Z"
                                            fill="url(#paint5_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g id="Vector_6" filter="url(#filter0_f_132_3263)">
                                        <path
                                            d="M52 428.656V347L-212 611H-130.344L52 428.656Z"
                                            fill="url(#paint6_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g id="Vector_7" filter="url(#filter1_f_132_3263)">
                                        <path
                                            d="M146 50L-189 385H-165.061L146 73.9394V50Z"
                                            fill="url(#paint7_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g id="Vector_8" filter="url(#filter2_f_132_3263)">
                                        <path
                                            d="M345.1 -154L124 67.1H139.8L345.1 -138.2V-154Z"
                                            fill="url(#paint8_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g id="Vector_9" filter="url(#filter3_f_132_3263)">
                                        <path
                                            d="M140 131H313L140 304V131Z"
                                            fill="url(#paint9_linear_132_3263)"
                                        ></path>
                                        <path
                                            d="M140 131H313L140 304V131Z"
                                            fill="url(#paint10_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g
                                        id="Vector_10"
                                        style={{
                                            mixBlendMode: "multiply",
                                        }}
                                    >
                                        <path
                                            d="M1315 316.788V121L682 754H877.789L1315 316.788Z"
                                            fill="url(#paint11_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g
                                        id="Vector_11"
                                        style={{
                                            mixBlendMode: "multiply",
                                        }}
                                    >
                                        <path
                                            d="M1220 -28.2093V-121L920 179H1012.79L1220 -28.2093Z"
                                            fill="url(#paint12_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g
                                        id="Vector_12"
                                        style={{
                                            mixBlendMode: "multiply",
                                        }}
                                    >
                                        <path
                                            d="M1968 388.791V296L1668 596H1760.79L1968 388.791Z"
                                            fill="url(#paint13_linear_132_3263)"
                                        ></path>
                                    </g>
                                </g>
                                <g
                                    id="foreground"
                                    style={{
                                        transform: "translate3d(-0.321429%, -0.693515%, 0px)",
                                        "--motion-translateX": "0px",
                                        "--motion-translateY": "0px",
                                        opacity: 1,
                                        transition:
                                            "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    }}
                                >
                                    <path
                                        id="Vector_13"
                                        d="M1563 30.6791V-85L1189 289H1304.68L1563 30.6791Z"
                                        fill="url(#paint14_linear_132_3263)"
                                    ></path>
                                    <g id="Vector_14" filter="url(#filter4_f_132_3263)">
                                        <path
                                            d="M1909 -173.321V-289L1535 85H1650.68L1909 -173.321Z"
                                            fill="url(#paint15_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g id="Vector_15" filter="url(#filter5_f_132_3263)">
                                        <path
                                            d="M761.1 577L540 798.1H555.8L761.1 592.8V577Z"
                                            fill="url(#paint16_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <path
                                        id="Vector_16"
                                        d="M2042 259.679V144L1668 518H1783.68L2042 259.679Z"
                                        fill="url(#paint17_linear_132_3263)"
                                    ></path>
                                    <g id="Vector_17" filter="url(#filter6_f_132_3263)">
                                        <path
                                            d="M1729.1 -57L1508 164.1H1523.8L1729.1 -41.2V-57Z"
                                            fill="url(#paint18_linear_132_3263)"
                                        ></path>
                                    </g>
                                    <g id="Vector_18" filter="url(#filter7_f_132_3263)">
                                        <path
                                            d="M1721 49H1774L1721 102V49Z"
                                            fill="url(#paint19_linear_132_3263)"

                                        ></path>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_132_3263"
                                    x="-263"
                                    y="296"
                                    width="366"
                                    height="366"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="25.5"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter1_f_132_3263"
                                    x="-210"
                                    y="29"
                                    width="377"
                                    height="377"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="10.5"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter2_f_132_3263"
                                    x="112"
                                    y="-166"
                                    width="245.1"
                                    height="245.1"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="6"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter3_f_132_3263"
                                    x="107"
                                    y="98"
                                    width="239"
                                    height="239"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="16.5"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter4_f_132_3263"
                                    x="1504"
                                    y="-320"
                                    width="436"
                                    height="436"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="15.5"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter5_f_132_3263"
                                    x="519"
                                    y="556"
                                    width="263.1"
                                    height="263.1"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="10.5"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter6_f_132_3263"
                                    x="1487"
                                    y="-78"
                                    width="263.1"
                                    height="263.1"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="10.5"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <filter
                                    id="filter7_f_132_3263"
                                    x="1703"
                                    y="31"
                                    width="89"
                                    height="89"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    ></feFlood>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    ></feBlend>
                                    <feGaussianBlur
                                        stdDeviation="9"
                                        result="effect1_foregroundBlur_132_3263"
                                    ></feGaussianBlur>
                                </filter>
                                <linearGradient
                                    id="paint0_linear_132_3263"
                                    x1="-788.962"
                                    y1="1499.58"
                                    x2="691.884"
                                    y2="18.7308"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_132_3263"
                                    x1="945.5"
                                    y1="1007"
                                    x2="375"
                                    y2="333.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_132_3263"
                                    x1="761.5"
                                    y1="604"
                                    x2="191"
                                    y2="-69.4999"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint3_linear_132_3263"
                                    x1="-596.41"
                                    y1="862.58"
                                    x2="123.1"
                                    y2="11.195"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint4_linear_132_3263"
                                    x1="-233.5"
                                    y1="188.5"
                                    x2="203.5"
                                    y2="-153"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="white"></stop>
                                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint5_linear_132_3263"
                                    x1="-161.927"
                                    y1="154.141"
                                    x2="385.227"
                                    y2="-312.773"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint6_linear_132_3263"
                                    x1="-260"
                                    y1="632.529"
                                    x2="45.6469"
                                    y2="371.706"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint7_linear_132_3263"
                                    x1="-179.152"
                                    y1="375.758"
                                    x2="137.938"
                                    y2="81.3501"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#40FEFF"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint8_linear_132_3263"
                                    x1="83.7999"
                                    y1="85.1308"
                                    x2="339.779"
                                    y2="-133.309"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint9_linear_132_3263"
                                    x1="140"
                                    y1="217.15"
                                    x2="313"
                                    y2="217.15"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="white"></stop>
                                    <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint10_linear_132_3263"
                                    x1="35.9711"
                                    y1="331.992"
                                    x2="280.76"
                                    y2="76.952"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop offset="1" stopColor="#1F80F0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint11_linear_132_3263"
                                    x1="405.59"
                                    y1="1340.58"
                                    x2="1125.1"
                                    y2="489.195"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint12_linear_132_3263"
                                    x1="789"
                                    y1="457"
                                    x2="1130"
                                    y2="53.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint13_linear_132_3263"
                                    x1="1537"
                                    y1="874"
                                    x2="1878"
                                    y2="470.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint14_linear_132_3263"
                                    x1="1294"
                                    y1="306.5"
                                    x2="1649.5"
                                    y2="-40.0002"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#1F80F0"></stop>
                                    <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint15_linear_132_3263"
                                    x1="1467"
                                    y1="115.5"
                                    x2="1900"
                                    y2="-254"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint16_linear_132_3263"
                                    x1="407.047"
                                    y1="833.875"
                                    x2="719.896"
                                    y2="507.925"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop offset="1" stopColor="#1F80F0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint17_linear_132_3263"
                                    x1="1600"
                                    y1="548.5"
                                    x2="2033"
                                    y2="179"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint18_linear_132_3263"
                                    x1="1467.8"
                                    y1="182.131"
                                    x2="1723.78"
                                    y2="-36.3089"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint19_linear_132_3263"
                                    x1="1711.36"
                                    y1="106.322"
                                    x2="1772.72"
                                    y2="53.9599"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00E9EA"></stop>
                                    <stop
                                        offset="1"
                                        stopColor="#1F80F0"
                                        stopOpacity="0.49"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                    {/* TODO: this comment is to be removed */}
                    {/* <div
                                className="absolute -right-20 z-20 h-[100%] w-[100%] border-2 border-white"
                                style={{
                                    clipPath: "polygon(30% 100%, 103% -90%, 170% -50%, 50% 140%)",
                                }}>
                                <img
                                    className="object-cover w-full h-full absolute -right-10"
                                    src={landingPageWoman}
                                    alt="landing page woman"
                                />
                            </div> */}

                    {/* woman image */}
                    <img src={landingPageWoman} alt="landing page banner" className="absolute -right-30 z-20 animate__animated animate__fadeInRight animate__slow" style={{
                        clipPath: "polygon(30% 100%, 103% -90%, 170% -50%, 50% 140%)",
                    }}></img>
                </div>
            </div>
        </section>
    );
};

export default LandingPageBanner;