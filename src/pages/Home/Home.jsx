import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Gallery from "../../components/Gallery/Gallery";
import "./home.scss";

const Home = () => {
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
            <section className="projectsContainer" id="projects">
                <div className="filter"></div>
                <div className="backgroundProjectsContainer">
                    <header className="projectsTitleContainer">
                        <span className="line"></span>
                        <h2 className="projectsTitle">Mes Projets</h2>
                        <span className="line"></span>
                    </header>
                    <section className="projects">
                        <Gallery />
                    </section>
                </div>
            </section>
            <section id="test"></section>
        </main>
    );
};

export default Home;
