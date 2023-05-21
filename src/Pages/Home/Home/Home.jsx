import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";
import Shop from "../Shop/Shop";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Shop></Shop>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;