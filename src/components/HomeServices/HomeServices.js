import React, { useEffect, useState } from "react";
import HomeService from "../HomeService/HomeService";
import "./HomeServices.css";



const HomeServices = () => {
    const [homeservices, setHomeServices] = useState([]);
    useEffect(() => {
        // local json data call
        fetch("./homeservice.json")
            .then((res) => res.json())
            .then((data) => setHomeServices(data));
    }, []);
    return (
        <div className="py-5 homeservices__bg">

            {/* home service heading */}
            <h1 className="text-center text-secondary display-3 fw-bold pt-3 pb-5">
                Our Services
            </h1>

            {/* home service other thing pass another component */}
            <div className="container">
                <div className="col-12 pb-3">
                    <div className="row">
                        {homeservices.map((homeservice) => (
                            <HomeService
                                key={homeservice.id}
                                homeservice={homeservice}
                            ></HomeService>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default HomeServices;