import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Root = () => {
    return (
        <div className="container mx-auto">
            <Outlet></Outlet>
            <div><Toaster /></div>
        </div>
    );
};

export default Root;