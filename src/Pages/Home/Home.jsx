import Company from "../../Component/Companys/Company";
import Navbar from "../../Component/Navbar/Navbar";
import Slider from "../../Component/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Company></Company>
        </div>
    );
};

export default Home;