import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";
import './TopButton.css';  

export function TopButton() {
    const [showButton, setShowButton] = useState(false);

    const scrollTop = () => {
        window.scrollTo({top:   0, behavior: 'smooth'});
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentageScrolled = (scrollPosition / totalHeight) *   100;

        if (percentageScrolled >   10) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        showButton && (
            <div className="top-button-container">
                <div className="top-button" onClick={scrollTop}>
                    <div className="button-content">
                        <FaChevronUp className="icon" size={25}/>
                    </div>
                </div>
            </div>
        )
    );
}