import React from 'react';
import { FaHandsHelping } from "react-icons/fa";
import { BiBuildingHouse, BiSupport, DiScala } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import { IoAirplaneSharp } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { GrCatalogOption } from "react-icons/gr";

const SecondSection = () => {
    return (
        <div>
            <div className="SecondSection">

                    {/* Card title */}
                    <div className="SecondSection__title">
                        What Arctic Turn Means to our Partner 
                    </div>

                    {/* benifit cards */}
                    <div className="SecondSection__cards">

                        <div className="SecondSection__cards-card">
                            <MdLanguage className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title">Scalability</div>
                            <div className="SecondSection__cards-card-info">Membership helps your progarms accessible to as many students as possible. </div>
                        </div>

                        <div className="SecondSection__cards-card">
                            <GrCatalogOption className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title">Promotion</div>
                            <div className="SecondSection__cards-card-info">We help members to promote their programs / courses to a students.</div>
                        </div>

                        <div className="SecondSection__cards-card">
                            <IoAirplaneSharp className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title">International Students</div>
                            <div className="SecondSection__cards-card-info">The Program offers an opportunity to members to collaborate with International students</div>
                        </div>

                        <div className="SecondSection__cards-card">
                            <HiLightBulb className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title">  Students Insights </div>
                            <div className="SecondSection__cards-card-info">Get an access to valuable student insights</div>
                        </div>

                    </div>

                    <div className='SecondSection__button'>
                    <button className="SecondSection__button__button">
                            Become a member
                        </button>

                    </div>
                    

            </div>
        </div>
    );
}

export default SecondSection;