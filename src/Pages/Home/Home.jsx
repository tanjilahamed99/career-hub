import Company from "../../Component/Companys/Company";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Personalized from "../../Component/Personalized/Personalized";
import Service from "../../Component/Service/Services";
import Slider from "../../Component/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Company></Company>
            <Service></Service>
            <Personalized></Personalized>
            <Footer></Footer>
        </div>
    );
};

export default Home;