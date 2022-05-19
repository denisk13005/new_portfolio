import React, { useState } from "react";
import "./gallery.scss";
import chevron from "../../assets/img/chevron.png";
import photo from "../../assets/img/photoId.jpg";
import photo2 from "../../assets/img/projectsContainer.jpg";

const Gallery = () => {
    const [test, setTest] = useState([photo, photo2]);
    return (
        <section className="gallery">
            <div className="arrow arrow__left">
                <img src={chevron} alt="" />
            </div>
            <div className="imgContainer">
                <img src={test[1]} alt="" className="projectImg" />
            </div>
            <div className="arrow arrow__right">
                <img src={chevron} alt="" />
            </div>
        </section>
    );
};

export default Gallery;
