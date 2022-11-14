import React from 'react';
import { RiHome7Line } from "react-icons/ri";
import { GiThreeFriends} from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import student1 from "../../Images/student1.jpg";
import student2 from "../../Images/student2.jpg";

const Header = () => {
  return (
      <header>
        <div className="NewThirdsection">

          <div className="SecondSection__title">
            What Arctic Turn has for students 
            </div>

          <div className='NewThirdsection__firstSection'>
            <div className="NewThirdsection__firstSection__card">
              <div className='NewThirdsection__firstSection__card__header'>
              Global Citizenship Program
              </div>
              <div className='NewThirdsection__firstSection__card__content'>
              The Global Citizen Program offers an opportunity to work in a group of 4-5 peers, true to the ideals of Project Based Learning principles. The problem statement is itself selected by the group and the solution is arrived at using PBL techniques of lifelong learning. Essential qualities like cross-cultural teamwork and collaboration, concept design are built in the process along with a skill to develop innovative business solutions for global problems. The fellowship program is designed to leverage goals for understanding and solving global problems.
By nature, all programs are flexible and are tailor made to fit each individual case. 

              </div>
              {/* <button className="NewThirdsection__firstSection__card__button">
                Become a member
              </button> */}
            </div>
            <div className="NewThirdsection__firstSection__card">
              <div className='NewThirdsection__firstSection__card__imageDiv'> 
              <img src={student1} alt="univeristy" className='NewThirdsection__firstSection__card__universityImg'/> 
              </div>
            </div>
          </div>

          

        </div>
      </header>
  );
}

export default Header;
