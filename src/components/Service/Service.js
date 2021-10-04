import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, price, duration } = props.service
    return (
        <div className="col-lg-3 col-sm-6 col-12 gy-4">



            <div className="h-100 shadow rounded">
                <img className="w-100 service__img" src={img} alt="" />
                <div className="p-2">
                    <h2 className="fs-4">{name}</h2>
                    <h3 className="fs-6 fw-light">Price: $ {price}</h3>
                    <h4 className="text-secondary fs-6 fst-italic">Duration: {duration}</h4>
                </div>
            </div>


        </div>
    );
};

export default Service;