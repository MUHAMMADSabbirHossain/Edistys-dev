import LandingPageBanner from "../../components/LandingPageBanner";
import Legacy from "../../components/legacy";
import Philosophy from "../../components/Philosophy";

const Home = () => {
    return (
        <>
            <LandingPageBanner />
            <Philosophy />
            <Legacy />
        </>
    );
};

export default Home;