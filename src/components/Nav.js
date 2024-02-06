import React, { useState, useEffect } from 'react';
import "../App.css"

function Nav() {
    const [show, handleShow] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 100) {
    //             handleShow(true);
    //         } else {
    //             handleShow(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className={`nav ${show ? 'nav_black' : ''}`}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
                alt="Netflix Logo"
                className="nav_logo"
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Profile Icon"
                className="profile_icon"
            />
        </div>
    );
}

export default Nav;
