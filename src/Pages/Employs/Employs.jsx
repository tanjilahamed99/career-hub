import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import DisplayEmployers from "./DisplayEmployers";
import Footer from "../../Component/Footer/Footer";

const Employs = () => {
    const employersData = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center">
                <div>
                    <h2 className="text-6xl font-bold leading-tight">Trusted by Hundreds <span className="text-purple-600">Employers</span> with High-Trust Culture</h2>
                    <p className="text-medium mt-4 text-lg">Career is an online platform that serves as a marketplace connecting job seekers and employers.</p>
                </div>
                <img src="https://i.ibb.co/MpPQKdJ/pngwing-com-23.png" alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-center mt-10">Showing All Employers</h2>
            <div className="grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                {
                    employersData.map((employers, idx) => <DisplayEmployers key={idx} employers={employers}></DisplayEmployers>)
                }
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Employs;