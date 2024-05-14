import React from 'react';
import './CustomPCPage.scss';

import PCBuilds from '../../assets/pc-builds.jpg'

import CardList from './CustomPCCards';
import Projects from './CustomPCProjects';
import CustomPCForm from './CustomPCForm';
import CustomPCStripeContainer from './CustomPCStripeContainer';

const CustomPCPage = () => {
    return (
        <>
        <div className="customPCContainer">
                <div className="customPCContent">
                    <h1 className="customPCHeading">Customize your own PC</h1>
                    <p className="customPCParagraph">Provide your requirements. Dream your design. We will personalize a unique computer. Just for you.</p>
                    <div className="customPCButtonsWrapper">
                        <button className="customPCbutton">Schedule Phone Chat</button>
                        <button className="customPCbutton">Schedule In-Person Consult</button>
                        <button className="customPCbutton">Get a Custom PC Warranty</button>
                    </div>
                </div>
                <div className="customPCImageContainer">
                    <img src={PCBuilds} alt="Custom PC Setup" className="customPCimage" />
                </div>
        </div>

        <div class="customPCSectionContainer">
            <h1 class="customPCSectionTitle">Who is this for?</h1>
            <p class="customPCSectionParagraph">
               Create your own customized gaming experience with us! We will provide recommendations
               and set it up for your exact requirement. Our gaming solutions are ideal for:
            </p>
        </div>

        <CardList />

        <Projects />

        <CustomPCForm />

        <CustomPCStripeContainer />
        </>
    );
};

export default CustomPCPage;
