import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import agileAndAdaptable from "../assets/technologies/agile and adaptable.avif";
import complianceReady from "../assets/technologies/compliance ready.avif"
import customerFocused from "../assets/technologies/customer fucused.avif"
import secureAndSafe from "../assets/technologies/secure and safe.avif"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Technologies.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const TechnologySliders = [
    {
        title: "Purpose-built financial services",
        category: "Customer Focused",
        image: customerFocused,
        strong: "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
        description: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities."
    },
    {
        title: "Agile and adaptable for growth",
        category: "agile and adaptable",
        image: agileAndAdaptable,
        strong: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
        description: "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities."
    },
    {
        title: "Manage compliance with ease",
        category: "compliance ready",
        image: complianceReady,
        strong: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
        description: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems."
    },
    {
        title: "Highly secure and safe",
        category: "secure and safe",
        image: secureAndSafe,
        strong: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
        description: "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure."
    }
];

const Technologies = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <section className=''>

            <div className='text-center space-y-5 my-10'>
                <h1 className='text-2xl sm:text-4xl font-semibold my-5 text-blue-500'>Technology built for you</h1>

                <strong className='text-4xl sm:text-6xl font-bold'>The future of finance</strong>
            </div>



            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">

                {TechnologySliders.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero bg-base-200 min-h-screen px-10 py-10">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img
                                    src={slide?.image}
                                    className="max-w-sm rounded-lg shadow-2xl" />
                                <div className='space-y-20'>
                                    <h1 className="text-5xl font-bold">{slide?.title}</h1>

                                    <strong className='font-semibold'>{slide?.strong}</strong>

                                    <p className="py-6">{slide?.description}</p>

                                    <Link to="/contact" className="btn bg-orange-500 text-white text-lg">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section >
    );
};

export default Technologies;