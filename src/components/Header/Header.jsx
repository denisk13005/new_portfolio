import React from "react";
import photo from "../../assets/img/photoId.jpg";
import "./header.scss";

const Header = () => {
    return (
        <header className="headerContainer">
            <div className="logoAndPhoto">
                <div className="logo">dk </div>
                <img className="photo" src={photo} alt="" />
            </div>
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
