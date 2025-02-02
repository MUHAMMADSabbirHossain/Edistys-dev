import philosophyLgImg from "../assets/philosophyLgImg.png";
import philosophySmImg from "../assets/philosophySmImg.png";
import simplify from "../assets/simplify.png";
import cutting from "../assets/cutting.svg";
import share from "../assets/share.svg";
const Philosophy = () => {
    const philosophyContents = [
        {
            heading: "Full-suite solutions",
            details: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
            image: share
        },
        {
            heading: "Simplify the complexity",
            details: "Simplify complex processes and optimise your financial operations byleveraging the power of AI, Blockchain, Cloud Computing, and BigData.",
            image: simplify
        },
        {
            heading: "Cutting-edge technology",
            details: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
            image: cutting
        }
    ]


    return (
        <section className="my-20">
            <div className="flex items-center justify-center flex-col p-10">
                <h1 className="font-bold text-2xl sm:text-4xl text-[#1f80f0] montserrat-font leading-6 text-center ">Our Philosohpy</h1>

                <p className="font-semibold text-4xl sm:text-6xl text-center">
                    Human-centred innovation
                </p>
                <div className="max-w-[1200px] mt-10">
                    {/* small screen */}
                    <img
                        src={philosophySmImg}
                        className="w-[417px] h-[480px] block lg:hidden"
                        alt="Philosophy img"
                    />
                    {/* large screen */}
                    <img
                        src={philosophyLgImg}
                        className="w-full hidden lg:block"
                        alt="Philosophy img"
                    />
                </div>
                <section className="flex flex-col md:flex-row flex-wrap gap-10 mt-10 justify-center">
                    {/* cards */}
                    {philosophyContents.map((content, index) => (<div key={index} className="bg-[#e4f3ff] w-[350px] h-[450px] px-5 py-10 flex items-start justify-center flex-col rounded-4xl space-y-5">
                        <img className=" object-contain " src={content?.image} alt="Finance" />

                        <h1 className="text-3xl font-bold text-[#00254e]">{content?.heading}</h1>

                        <p className="text-lg text-[#164377]">{content?.details}</p>
                    </div>))}
                </section>
            </div>
        </section>
    );
};

export default Philosophy;