import React, { useEffect, useState } from "react";
import "./gallery.scss";
import chevron from "../../assets/img/chevron.png";

import { projects } from "../../assets/projects";
import "../../assets/img/photoId.jpg";

const Gallery = ({ e }) => {
    const [index, setIndex] = useState(0);
    const [imgClassName, setImageClassName] = useState("in");
    const [descriptionClassName, setDescriptionClassName] = useState("left");
    console.log(e);

    const next = async () => {
        index >= projects.length - 1 ? setIndex(0) : setIndex(index + 1);
        imgClassName === "in"
            ? setImageClassName("out")
            : setImageClassName("in");
        setDescriptionClassName("notVisible");

        setTimeout(() => {
            setDescriptionClassName("left");
            console.log("test");
        }, 100);
    };
    const previous = () => {
        index === 0 ? setIndex(projects.length - 1) : setIndex(index - 1);
        imgClassName === "in"
            ? setImageClassName("out")
            : setImageClassName("in");
        setDescriptionClassName("notVisible");
        setTimeout(() => {
            setDescriptionClassName("left");
        }, 100);
    };

    useEffect(() => {
        if (e === "next") {
            next();
        }
        if (e === "previous") {
            previous();
        }
    }, [e]);
    return (
        <section className="gallery">
            <div className="arrow arrow__left" onClick={previous} tabIndex={1}>
                <img src={chevron} alt="" />
            </div>
            <div className="projectContainer">
                <div className="imgContainer">
                    <img
                        src={projects[index].image}
                        alt=""
                        className={imgClassName}
                    />
                </div>
                <div className="descriptionContainer">
                    <div className={descriptionClassName}>
                        <h3 className="descriptionContainer__title">
                            {projects[index].description.title}
                        </h3>
                        <div className="descriptionContainer__description">
                            {projects[index].description.description}
                        </div>
                        <div className="descriptionContainer__technos">
                            <h3>Technologies utilisées :</h3>
                            {projects[index].description.techno.map(
                                (el, index) => {
                                    return <span key={index}>{el}</span>;
                                }
                            )}
                        </div>
                        <div className="descriptionContainer__link">
                            <a
                                href={projects[index].description.link}
                                target="blank"
                            >
                                Visiter le site
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrow arrow__right" onClick={next}>
                <img src={chevron} alt="" />
            </div>
        </section>
    );
};

export default Gallery;
