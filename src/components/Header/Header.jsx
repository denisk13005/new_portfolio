import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/img/photoId.jpg";
import "./header.scss";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="headerContainer">
            <div className="logoAndPhoto">
                <div className="logo">dk </div>
                <img className="photo" src={photo} alt="" />
            </div>
            <nav className="navigation">
                <ul>
                    <li onClick={() => (window.location.href = "#projects")}>
                        Mes Projets
                    </li>
                    <li onClick={() => navigate("/CV")}>CV</li>
                    <li
                        onClick={() =>
                            (window.location = "mailto:kirmanndenis@gmail.com")
                        }
                    >
                        Contactez Moi
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
