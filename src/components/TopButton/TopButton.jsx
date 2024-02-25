import React, { useState, useEffect, useContext} from 'react';
import { FaChevronUp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import Theme from "../Theme/Theme";
import { ThemeContext } from "../../context/ThemeContextProvider";
import './TopButton.css';  

export function TopButton() {
    const { isDarkMode } = useContext(ThemeContext);
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
        <div className={`top-button-container ${showButton ? 'show' : ''} ${isDarkMode ? "top-button-dark" : ""}`}>
        <div className="top-button" onClick={scrollTop}>
            <div className="button-content">
                <FaArrowUp className="icon" />
            </div>
        </div>
    </div>
    );
}