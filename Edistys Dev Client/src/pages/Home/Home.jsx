import LandingPageBanner from "../../components/LandingPageBanner";
import Legacy from "../../components/legacy";
import Philosophy from "../../components/Philosophy";
import Technologies from "../../components/Technologies";

const Home = () => {
    return (
        <>
            <LandingPageBanner />
            <Philosophy />
            <Technologies />
            <Legacy />
        </>
    );
};

export default Home;