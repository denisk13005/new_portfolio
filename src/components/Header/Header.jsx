import React from "react";
import "./header.scss";

const Header = () => {
    return (
        <header className="headerContainer">
            <div className="logo">dk </div>
            <nav className="navigation">
                <ul>
                    <li>Mes Projets</li>
                    <li>CV</li>
                    <li>Contactez Moi</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
