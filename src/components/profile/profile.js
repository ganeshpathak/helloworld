import React, { useState, useEffect } from 'react';
import ganeshPic from '../../images/ganesh.jpeg'

function Profile() {


    const [userName, setUserName] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');

        if (name) {
            setUserName(name);
        } else {
            setUserName('Ganesh');
        }

    }, [])



    return (
        <div>
            <h2>{userName}</h2>
            <img src={ganeshPic}></img>
        </div>
    )
}

export default Profile
