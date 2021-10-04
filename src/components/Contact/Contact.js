import React from "react";
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact__bg">
            <div className="container">
            <div className="row">
                <div className="col-md-8 col-12">
                </div>
                <div className="col-md-4 col-12 pt-5 mt-5">
                <form action="" className="bg-light shadow rounded px-4 py-2 text-center form-color">
                                <h3 className="pt-3">Sign Up Today</h3>
                                <p>Please fill out this form to register</p>
                                <div className="my-3">
                                    <input className="form-control form-control-lg" type="text" name="" id="" placeholder="Username" />
                                </div>
                                <div className="my-3">
                                    <input className="form-control form-control-lg" type="email" name="" id="" placeholder="Email" />
                                </div>
                                <div className="my-3">
                                    <input className="form-control form-control-lg" type="password" name="" id="" placeholder="Password" />
                                </div>
                                <div className="my-3">
                                    <input className="form-control form-control-lg" type="password" name="" id="" placeholder="Confirm Password" />
                                </div>
                            </form>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Contact;
