import React from "react";
import Header from "../../components/Header/Header";
import "./home.scss";

const Home = () => {
    return (
        <main className="mainHomeContainer">
            <section className="backgroundContainer">
                <Header />
                <div className="titleContainer">
                    <h1 className="homeTitle">Kirmann Denis</h1>
                    <p>Developpeur Front-End React</p>
                </div>
            </section>
            <section className="projectsContainer">
                <div className="backgroundProjectsContainer">
                    <header className="projectsTitleContainer">
                        <span className="line"></span>
                        <h2 className="projectsTitle">Mes Projets</h2>
                        <span className="line"></span>
                    </header>
                    <section className="projects"></section>
                </div>
            </section>
        </main>
    );
};

export default Home;
