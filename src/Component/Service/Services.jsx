import { useEffect, useState } from "react";
import DisplayService from "../display-service/DisplayService";

const Service = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div data-aos="fade-up" className="mt-20">
            <h2 className="text-center font-bold text-3xl mt-10 mb-5 ">Our Service</h2>
            <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 px-4 md:px-4 gap-10 items-center justify-center text-center">
                {
                    services.slice(0,6).map((service, idx) => <DisplayService key={idx} service={service}></DisplayService>)
                }
            </div>
        </div>
    );
};

export default Service;