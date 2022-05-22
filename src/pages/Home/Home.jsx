import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import "./home.scss";

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
    return (
        <main className="mainHomeContainer">
            <Header />

            <section className="backgroundContainer">
                <div className="filter"></div>

                <div className="titleContainer">
                    <h1 className="homeTitle">Kirmann Denis</h1>
                    <p>Developpeur Front-End React</p>
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
