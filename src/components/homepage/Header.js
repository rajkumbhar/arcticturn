import React from 'react';
import { RiHome7Line } from "react-icons/ri";
import { GiThreeFriends} from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import University from "../../Images/University.jpg";

const Header = () => {
  return (
      <header>
        <div className="container">
          {/* cover video */}
          <div className="bg-first">
            {/* <video className="bg-video__content" playsInline autobuffer="true" autoPlay muted loop>
              <source src={Friends} type="video/mp4"/>
            </video> */}
            <div className="bg-first__content">
            </div>
          </div>

          <div className="user-nav">

            {/* nav logo */}
            <div className="user-nav__logo-box">
                <div className="user-nav__logo-box__logo">
                    Arctic Turn
                </div>
            </div>

            {/* nav buttons */}
            <div className="user-nav__buttons">
              <div className="user-nav__buttons_button">
                Connect With us  
              </div>
              <div className="user-nav__buttons_button">
                Log In 
              </div>
              <div className="user-nav__buttons_button">
                Sign Up 
              </div>
              <div className="user-nav__buttons_menu">
              <IoIosMenu className="user-nav__menu-icon"/>
            </div>
            </div>

            

          </div>

          {/* <div className="card-container__card">
                <div className="card-container__card__title">
                    Take student experience to the next level
                    International learning & engagement program
                </div>
                <div className="card-container__card__buttons">
                    <button className="card-container__card__buttons-button">
                        <RiHome7Line className="card-container__card__buttons-button-icon"/>
                        Show me how
                    </button>
                    <button className="card-container__card__buttons-button">
                        <GiThreeFriends className="card-container__card__buttons-button-icon"/>
                        Roommates
                    </button> 
                </div>
          </div> */}

          <div className='first-content'>
            <div className="first-content__card">
              <div className='first-content__card__header'>
              COLLEGES AND UNIVERSITIES
              </div>
              <div className='first-content__card__content'>
              ArcticTurn is a rich engagement program providing an experience of learning for the 21st century. The order of the world being rearranged post the COVID pandemic, education is no longer confined to university classrooms. 
Learning experience coupled with international travel involving cultural immersion holds the capacity of enhancing the personality of all stakeholders involved. 

              </div>
              <button className="first-content__card__button">
                Become a member
              </button>
            </div>
            <div className="first-content__card">
              <div className='first-content__card__imageDiv'> 
              <img src={University} alt="univeristy" className='first-content__card__universityImg'/> 
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
