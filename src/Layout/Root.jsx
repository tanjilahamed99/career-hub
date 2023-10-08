import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Outlet></Outlet>
            <div><Toaster/></div>
        </div>
    );
};

export default Root;