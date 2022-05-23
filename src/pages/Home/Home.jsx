import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import "./home.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import aos from "aos";

const Home = () => {
    const [e, setE] = useState("");
    const handlePress = (e) => {
        if (e.key === "ArrowRight") {
            setE("next");
            setTimeout(() => {
                setE("");
            }, 100);
        }
        if (e.key === "ArrowLeft") {
            setE("previous");
            setTimeout(() => {
                setE("");
            }, 100);
        } else {
            return;
        }
    };
    useEffect(() => {
        Aos.init();
    });
    return (
        <main className="mainHomeContainer">
            <Header />

            <section className="backgroundContainer">
                <div className="filter"></div>

                <div className="titleContainer">
                    <h1
                        className="homeTitle"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Kirmann Denis
                    </h1>
                    <p
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                    >
                        Developpeur Front-End React
                    </p>
                </div>
            </section>
            <section
                className="projectsContainer"
                id="projects"
                tabIndex={0}
                onKeyUp={handlePress}
            >
                <div className="filter"></div>
                <div className="backgroundProjectsContainer">
                    <header className="projectsTitleContainer">
                        <span className="line"></span>
                        <h2 className="projectsTitle">Mes Projets</h2>
                        <span className="line"></span>
                    </header>
                    <section className="projects">
                        <Gallery e={e} />
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Home;
