import About from "./About/About";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Review from "./Review/Review";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;