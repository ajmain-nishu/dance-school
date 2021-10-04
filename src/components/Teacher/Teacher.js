import React from 'react';
import teacherImageOne from '../../images/teacher-1.png'
import teacherImageTwo from '../../images/teacher-2.png'
import teacherImageThree from '../../images/teacher-3.png'

const Teacher = () => {
    return (
        <div className="container">
            <h2 className="text-center my-5 pb-4 display-3">Our Classified Teacher</h2>
            <div className="row text-center">
                <div className="col-md-4 col-12">
                <img className="teacher__img rounded shadow p-5" src={teacherImageOne} alt="" />
                </div>
                <div className="col-md-4 col-12 mt-5">
                    <div className="mt-5">
                    <img className="teacher__img shadow rounded p-5" src={teacherImageTwo} alt="" />
                    </div>
                
                </div>
                <div className="col-md-4 col-12 mt-3">
                <img className="teacher__img rounded shadow p-5" src={teacherImageThree} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Teacher;