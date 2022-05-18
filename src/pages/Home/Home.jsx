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
                    <h2>Mes Projets</h2>
                </div>
            </section>
        </main>
    );
};

export default Home;
