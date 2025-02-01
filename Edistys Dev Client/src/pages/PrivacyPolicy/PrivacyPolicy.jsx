import contents from "./PrivacyPolicyContent";

const PrivacyPolicy = () => {

    return (
        <section className="space-y-20 font-medium text-md mx-10 text my-5">
            <div>
                <h1 className="text-3xl font-bold my-5">Any Technology Privacy Notice EN</h1>
                <p>At Any Technology, we prioritize the protection of your personal data and respect your privacy. To ensure that you have the necessary information to make informed decisions, we kindly ask you to review this Privacy Notice. It outlines how we collect, use, share, and store your personal data, as well as the choices you have regarding your privacy.</p>
            </div>

            <div className="">
                <h2 className="text-3xl font-bold my-5">Introduction</h2>
                <p>This Privacy Notice (&quot;Notice&quot;) applies to the personal data collected by Any Technology, its subsidiaries, and affiliates worldwide (&quot;we,&quot; &quot;us,&quot; or &quot;Any Technology&quot;) through our websites, applications, products, and services (collectively referred to as &quot;Services&quot;). It explains how we handle personal data, such as names and identification numbers, that can identify sectioniduals (&quot;Personal Data&quot;).

                    As a financial services technology company, Any Technology offers a highly adaptable, open platform distributed banking solution that enables financial institutions to digitally transform and scale with agility. When using our Services, our customers typically act as data controllers for the personal data of their customers which they provide or upload in our systems. Any Technology acts as a data processor, processing personal data on behalf of our customers in accordance with applicable Service(s) and/or data processing agreements (“Service Agreements”).

                    This Notice is intended to inform individuals affiliated with Any Technology as customers, partners, or service providers about how we collect, use, disclose, and store their personal data when interacting with our Services.</p>
            </div>

            <div>
                {contents.map((content, index) => (
                    <article key={index} className="mb-6">
                        <h2 className="text-3xl font-semibold">{`${index + 1}. ${content.question}`}</h2>
                        <p className="mt-2 text-base/loose">
                            {content.answer.split("\n").map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PrivacyPolicy;