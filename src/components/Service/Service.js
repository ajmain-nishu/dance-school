import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, img, price, duration} = props.service
    return (
        <div className="col-lg-3 col-md-6 col-12 gy-4">



            <div className="h-100 shadow">
            <img className="w-100 aaa" src={img} alt="" />
            <div className="p-2">
            <h2>{name}</h2>
            <h3>Price: $ {price}</h3>
            <h4>Duration: {duration}</h4>
            </div>
            </div>
            
            
        </div>
    );
};

export default Service;