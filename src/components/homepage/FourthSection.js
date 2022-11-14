import React, {useState} from 'react';
import { ImPhone } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

const FourthSection = () => {
    const [name, setName] = useState('');

    const handleOnChange = (e) => {
        const {value} = e.target;
        setName(value);
    }

    return (
        <div className="Fourthsection" id="contactus">
            <div className="Fourthsection__contactinfo">
                <div className="Fourthsection__contactinfo-info">
                    <div>
                        <h1 className="Fourthsection__contactinfo-info-hello">Join us</h1>
                        {/* <h1 className="Fourthsection__contactinfo-info-hello">{name? `Hello ${name},` : "Hello,"}</h1> */}
                        <h3 className="Fourthsection__contactinfo-info-tagline">We’d love to talk more with you about the benefits of becoming a Member</h3>
                        <p className="Fourthsection__contactinfo-info-discription">Complete the form below and we’ll be in touch!</p>
                        {/* <p className="Fourthsection__contactinfo-info-discription">Please give us your contact infomation, we will contact you in no time</p> */}
                    </div>
                    <div>
                        <div className="Fourthsection__contactinfo-info-contact" >
                            <ImPhone className="Fourthsection__contactinfo-info-icon"/>  
                            +91 9004916456
                        </div>
                        <div className="Fourthsection__contactinfo-info-contact" >
                            <HiOutlineMail className="Fourthsection__contactinfo-info-icon"/>
                            contact.arcticturn@gmail.com
                        </div>
                    </div>
                </div>
            </div>

            <div className="Fourthsection__contactform">
                <div className="Fourthsection__contactform-form">
                        <div className="Fourthsection__contactform-form-allinput">
                            <div className="Fourthsection__contactform-form-allinput-input">
                                First Name:
                                <input onChange={handleOnChange} value={name} type="text" name="firstname" className="Fourthsection__contactform-form-allinput-input-inputfield" />
                            </div>
                            <div className="Fourthsection__contactform-form-allinput-input">
                                Last Name:
                                <input  type="text" name="firstname" className="Fourthsection__contactform-form-allinput-input-inputfield"/>
                            </div>
                            <div className="Fourthsection__contactform-form-allinput-input">
                                Phone Number:
                                <input type="number" name="phone" className="Fourthsection__contactform-form-allinput-input-inputfield"/>
                            </div>
                            <div className="Fourthsection__contactform-form-allinput-input">
                                Email:
                                <input type="email" name="email" className="Fourthsection__contactform-form-allinput-input-inputfield"/>
                            </div>
                            <div className="Fourthsection__contactform-form-allinput-input">
                                Institution Name:
                                <input  type="text" name="institutionName" className="Fourthsection__contactform-form-allinput-input-inputfield"/>
                            </div>
                        </div>
                        <button className="Fourthsection__contactform-form-button">
                            Submit
                        </button>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;