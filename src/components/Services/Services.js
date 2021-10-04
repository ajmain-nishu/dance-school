import React, { useEffect, useState } from "react";
import Service from "../Service/Service";



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        //local service json data call
        fetch("./services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            <h1 className="text-center display-4 py-5">Our Services</h1>

            {/* using map and pass values another component */}
            <div className="container">
                <div className="col-12 pb-5 mb-5">
                    <div className="row">
                        {services.map((service) => (
                            <Service key={service.id} service={service}></Service>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Services;