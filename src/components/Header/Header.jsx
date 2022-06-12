import React from "react";
import { Link } from "react-router-dom";
import photo from "../../assets/img/photoId2.png";
import "./header.scss";
import cv from "../../assets/Cv_Kirmann_Denis.pdf";
import projects from "../../assets/img/projects.png";
import cvIcon from "../../assets/img/cv.png";
import contact from "../../assets/img/contact.png";
const Header = () => {
    return (
        <header className="headerContainer">
            <div className="logoAndPhoto">
                <div className="logo"></div>
                <img className="photo" src={photo} alt="" />
            </div>
            <nav className="navigation" aria-label="navigation bar">
                <ul>
                    <li>
                        <a
                            href="#projects"
                            aria-label="see projects"
                            aria-current="page"
                        >
                            <span id="desktop"> Mes Projets</span>
                            <div className="mobile">
                                <img
                                    className="img__mobile"
                                    src={projects}
                                    alt=""
                                ></img>
                                <div>Projets</div>
                            </div>
                        </a>
                    </li>
                    <li href={cv}>
                        <a href={cv} dowload="true" className="cv">
                            <span id="desktop">Téléchargez mon Cv</span>
                            <div className="mobile">
                                <img
                                    className="img__mobile"
                                    src={cvIcon}
                                    alt=""
                                ></img>
                                <div>CV</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            // href=" mailto:kirmanndenis@gmail.com"
                            className="contact"
                        >
                            <span id="desktop">Contactez Moi</span>
                            <div className="mobile">
                                <img
                                    className="img__mobile"
                                    src={contact}
                                    alt=""
                                ></img>
                                <div>Contact</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
