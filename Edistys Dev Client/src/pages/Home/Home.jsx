import FutureFinance from "../../components/FutureFinance";
import LandingPageBanner from "../../components/LandingPageBanner";
import Legacy from "../../components/legacy";
import Philosophy from "../../components/Philosophy";
import Technologies from "../../components/Technologies";
import Trusted from "../../components/Trusted";

const Home = () => {
    return (
        <>
            <LandingPageBanner />
            <FutureFinance />
            <Philosophy />
            <Technologies />
            <Trusted />
            <Legacy />
        </>
    );
};

export default Home;