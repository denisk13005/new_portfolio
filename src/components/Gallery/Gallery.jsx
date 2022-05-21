import React, { useEffect, useState } from "react";
import "./gallery.scss";
import chevron from "../../assets/img/chevron.png";

import { imagesProjects } from "../../assets/imagesProject"; // importe le tableau de  ^photo à afficher
import "../../assets/img/photoId.jpg";

const Gallery = () => {
    // const [test, setTest] = useState([photo, photo2]);
    const [index, setIndex] = useState(0);
    const [imgClassName, setImageClassName] = useState("in");
    // console.log(index, test.length);

    useEffect(() => {
        const container = document.querySelector(".imgContainer");
        const img = document.createElement("img");
        container.appendChild(img);
    }, []);

    const next = () => {
        index >= imagesProjects.length - 1 ? setIndex(0) : setIndex(index + 1);
        imgClassName === "in"
            ? setImageClassName("out")
            : setImageClassName("in");
    };
    const previous = () => {
        // index < 0 ? setIndex(imagesProjects.length - 1) : setIndex(index - 1);
        // setIndex(index - 1);
        index === 0 ? setIndex(imagesProjects.length - 1) : setIndex(index - 1);
        imgClassName === "in"
            ? setImageClassName("out")
            : setImageClassName("in");
        console.log(imagesProjects.length - 1);
    };
    return (
        <section className="gallery">
            <div className="arrow arrow__left" onClick={previous}>
                <img src={chevron} alt="" />
            </div>
            <div className="projectContainer">
                <div className="imgContainer">
                    <img
                        src={imagesProjects[index].image}
                        alt=""
                        className={imgClassName}
                    />
                </div>
            </div>
            <div className="arrow arrow__right" onClick={next}>
                <img src={chevron} alt="" />
            </div>
        </section>
    );
};

export default Gallery;
