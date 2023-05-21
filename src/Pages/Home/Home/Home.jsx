import { useNavigation } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";
import Shop from "../Shop/Shop";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const Home = () => {
    useTitle('Home')
    const navigation = useNavigation()
    console.log(navigation.state)
    if(navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }
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