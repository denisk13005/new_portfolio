import React from "react";
import { Link, useNavigate } from "react-router-dom";
import photo from "../../assets/img/photoId.jpg";
import "./header.scss";
import cv from "../../assets/newCv.pdf";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="headerContainer">
            <div className="logoAndPhoto">
                <div className="logo">
                    dk <div>développement</div>{" "}
                </div>
                <img className="photo" src={photo} alt="" />
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="#projects">Mes Projets</a>
                    </li>
                    <li href={cv} download>
                        <a href={cv} dowload>
                            Download Cv
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            // href=" mailto:kirmanndenis@gmail.com"
                        >
                            Contactez Moi
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
