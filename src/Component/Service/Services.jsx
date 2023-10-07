import { useEffect, useState } from "react";
import DisplayService from "../display-service/DisplayService";

const Service = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div className="mt-20">
            <h2 className="text-center font-bold text-3xl mt-10 mb-5 ">Our Service</h2>
            <div className="grid grid-cols-3 gap-10 items-center justify-center text-center">
                {
                    services.map((service, idx) => <DisplayService key={idx} service={service}></DisplayService>)
                }
            </div>
        </div>
    );
};

export default Service;