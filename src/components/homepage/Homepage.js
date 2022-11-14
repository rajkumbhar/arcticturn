import React from 'react';
import Header from './Header';
import SecondSection from './SecondSection';
import NewThirdsection from './NewThirdsection';
import FourthSection from './FourthSection';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div >
            <Header />
            <SecondSection/>
            <NewThirdsection/>
            <FourthSection/>
            <Footer/> 
        </div>
        );
}

export default Homepage;
