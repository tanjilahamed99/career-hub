import Company from "../../Component/Companys/Company";
import Navbar from "../../Component/Navbar/Navbar";
import Service from "../../Component/Service/Services";
import Slider from "../../Component/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Company></Company>
            <Service></Service>
        </div>
    );
};

export default Home;