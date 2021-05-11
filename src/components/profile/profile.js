import React, { useState, useEffect } from 'react';
import ganeshPic from '../../images/ganesh.jpeg';
import sandeepPic from '../../images/sandeep.jpeg';
import './profile.scss';

function Profile() {


    const [userName, setUserName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const sandeep = {
        name: "Sandeep"
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');

        if (name) {
            setUserName(name);
            name === 'sandeep' ? setProfilePic(sandeepPic) : setProfilePic(ganeshPic);
        } else {
            setUserName('Ganesh');
        }

    }, [])



    return (
        <div className="main-container">
            {/* <div className="header">
                <h1> XYZ Water supply</h1>
            </div> */}
            <div className="middle-container">
                {/* <div className="image-container"> */}
                <img className="image-resize" src={profilePic}></img>
                {/* </div> */}
                <div className="details-container">
                    <div className="field-container">
                        <div className="field">Name</div>
                        <div className="value">Ganesh Adinath Pathak</div>
                    </div>
                    <div className="field-container">
                        <div className="field">Date Of Birth</div>
                        <div className="value">13-Sept-1989</div>
                    </div>
                    <div className="field-container">
                        <div className="field">Address</div>
                        <div className="value">Pune</div>
                    </div>
                    <div className="field-container">
                        <div className="field">Card Activation Date</div>
                        <div className="value">10-Jan-2021</div>
                    </div>
                    <div className="field-container">
                        <div className="field">Last Transaction Date</div>
                        <div className="value">10-Jan-2021</div>
                    </div>
                    <div className="field-container">
                        <div className="field">Last Payment Date</div>
                        <div className="value">10-Jan-2021</div>
                    </div>
                    <div className="field-container">
                        <div className="field">Payment Due</div>
                        <div className="value">1000 Rs</div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="copyright">© Amay Software Solutions 2020</p>
            </div>
        </div>
    )
}

export default Profile
