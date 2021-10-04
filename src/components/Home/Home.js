import React from 'react';
import HomeServices from '../HomeServices/HomeServices';
import Teacher from '../Teacher/Teacher';
import './Home.css'

const Home = () => {
    return (
        <div >
            <div className="bg text-center text-white">
                <h1 className="display-1 fw-bold">Dance School</h1>
                <h2 className="">Dance Classes For EveryBody</h2>
            </div>
            <Teacher></Teacher>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;