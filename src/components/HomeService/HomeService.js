import React from 'react';
import './HomeService.css'

const HomeService = (props) => {
    const { name, img, price, duration } = props.homeservice
    return (
        <div className="col-lg-3 col-sm-6 col-12 gy-4">
            <div className="h-100">
                <div className="text-center">
                <img className="homeservice__img rounded-circle" src={img} alt="" />
                </div>
                
                <div className="pt-5 pb-2 px-2 shadow homeservice__card rounded-pill text-center bg-white">
                    <h2 className="pt-3">{name}</h2>
                    <h3 className="fs-6 fw-light">Price: $ {price}</h3>
                    <h4 className="text-secondary fs-6 fst-italic">Duration: {duration}</h4>
                </div>
            </div>


        </div>
    );
};

export default HomeService;