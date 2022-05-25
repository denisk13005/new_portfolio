import React from "react";
import "./contact.scss";
import git from "../../assets/img/github.png";
import lkd from "../../assets/img/lkd.png";
import headBand from "../../assets/img/headBand.png";
import home from "../../assets/img/home.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    return (
        <main className="contactContainer ">
            <img
                src={home}
                alt=""
                className="back"
                onClick={() => navigate("/")}
            />
            <aside className="headBandContainer">
                <img src={headBand} alt="" />
            </aside>
            <section className="contactModal">
                <div className="informations">
                    <h2 className="title">Contactez-moi</h2>
                    <p className="name">Kirmann denis</p>
                    <p className="adress">
                        34 rue Virgile Marron - 13005 Marseille
                    </p>
                    <p className="hours">Lun-Ven : 9h00-16h00</p>
                    <p className="dispo">
                        Joignable au <strong>06.24.09.65.48</strong> de 9h à 20h
                        tous les jours
                    </p>
                    <h3 className="socialTitle">Suivez moi</h3>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/denis-kirmann-08488511b/">
                            <img src={lkd} alt="" className="lkd" />
                        </a>
                        <a href="https://github.com/denisk13005">
                            <img src={git} alt="" className="github" />
                        </a>
                    </div>
                </div>
                <span className="separation"></span>
                <div className="mail">
                    <a
                        href="mailto:kirmanndenis@gmail.com"
                        className="mailLink"
                    >
                        Envoyez moi un mail
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Contact;
