import C1 from "../assets/companyLogos/company-1.webp";
import C2 from "../assets/companyLogos/company-2.webp";
import C3 from "../assets/companyLogos/company-3.webp";
import C4 from "../assets/companyLogos/company-4.webp";
import C5 from "../assets/companyLogos/company-5.webp";
import C6 from "../assets/companyLogos/company-6.webp";
import C7 from "../assets/companyLogos/company-7.webp";
import C8 from "../assets/companyLogos/company8.webp";
import C9 from "../assets/companyLogos/company-9.webp";
import C10 from "../assets/companyLogos/company-10.webp";
import C11 from "../assets/companyLogos/company-11.webp";
import C12 from "../assets/companyLogos/company-12.webp";
import C13 from "../assets/companyLogos/company-13.webp";
import C14 from "../assets/companyLogos/company-14.webp";
import C15 from "../assets/companyLogos/company-15.webp";



const Companies = () => {

    const companyLogos = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15];

    return (
        <section className="flex items-center justify-center flex-wrap gap-10">
            {
                companyLogos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Company ${index + 1}`} width={150} className="object-contain" />
                ))
            }
        </section>
    );
};

export default Companies;