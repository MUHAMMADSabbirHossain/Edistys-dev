import { useState } from "react";
import { Link } from "react-router-dom";


const Contact = () => {


    const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    function handleFormOnChange(event) {
        const { name, value } = event.target;
        setContactForm(prevState => ({
            ...prevState,
            [name]: value
        }));
        // console.log(contactForm);
    }

    function handleFormOnSubmit(event) {
        event.preventDefault();
        console.log(contactForm);

        alert(`Thank you for, ${contactForm?.firstName}. We will get back to you as soon as possible on email: ${contactForm?.email}.`);
    };


    return (
        <section>

            <div className="hero bg-base-200 min-h-screen  " style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
                <div className="hero-overlay backdrop-blur-xs bg-opacity-60">
                    <div className="hero-content flex-col lg:flex-row" >
                        <div className="text-center lg:text-left">
                            <h1 className="text-6xl font-bold">{`Let's Talk`}</h1>
                            <p className="py-10 font-semibold text-xl">Have questions about building the next generation of banking experiences, our pricing, or our customer success stories?</p>
                        </div>

                        <form className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" onSubmit={handleFormOnSubmit}>

                            <div className="card-body">
                                <div className="flex space-x-5">
                                    <fieldset className="fieldset flex">
                                        <legend className="fieldset-legend">First Name*</legend>
                                        <input type="text" className="input" placeholder="First Name" name="firstName" value={contactForm?.firstName} onChange={handleFormOnChange} />
                                    </fieldset>

                                    <fieldset className="fieldset flex">
                                        <legend className="fieldset-legend">Last Name*</legend>
                                        <input type="text" className="input" placeholder="Last Name" name="lastName" value={contactForm?.lastName} onChange={handleFormOnChange} />
                                    </fieldset>
                                </div>

                                <div className="flex space-x-5">
                                    <fieldset className="fieldset flex">
                                        <legend className="fieldset-legend">Job Title*</legend>
                                        <input type="text" className="input" placeholder="Job Title" name="jobTitle" value={contactForm?.jobTitle} onChange={handleFormOnChange} />
                                    </fieldset>

                                    <fieldset className="fieldset flex">
                                        <legend className="fieldset-legend">Company Name*</legend>
                                        <input type="text" className="input" placeholder="Company Name" name="companyName" value={contactForm?.companyName} onChange={handleFormOnChange} />
                                    </fieldset>
                                </div>


                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email*</label>
                                    <input type="email" className="input" placeholder="example@mail.com" name="email" value={contactForm?.email} onChange={handleFormOnChange} />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Message</legend>
                                    <textarea className="textarea h-40" placeholder="Let us know how we can help you!" name="message" value={contactForm?.message} onChange={handleFormOnChange}></textarea>
                                </fieldset>

                                <strong className="font-semibold">By submitting this form, you confirm that you agree to the processing of your personal data by <Link to="/"><u>AnyTech</u></Link> as described in the <Link to="/privacy-policy"><u>Privacy Policy</u></Link>.</strong>

                                <button type="submit" className="btn bg-orange-500 my-5 font-semibold text-lg">Submit {`>`}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Contact;