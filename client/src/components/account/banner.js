import React from 'react';
import BackgroundImage from "../../assets/banner.jpeg";

const styles = {
    objectFit: "cover",
    backgroundSize: "cover",
    width: "81.5vw",
    height: "40vh",
    display: "inline-block",
    overflow: "hidden",
};

const image = {
    objectFit: "cover",
    height: "100%",
    width: "100%",
    padding: 0,
    margin: 0,
    overflowX: "hidden",
    zIndex: 0
}

const bannerText = {
    position: "absolute",
    left: "25vw",
    top: "10vh",
    color: "white",
    zIndex: 4
}

const user = "University";

const Banner = () => {
    return (
        <div style={styles}>
            <img className="img-fluid" src={BackgroundImage} alt="Banner" style={image}></img>
            <div className="headerText" style={bannerText}>
                <h1>Hi {user}!</h1>
                <h1>Welcome to iStudyAbroad!</h1>
                <h1>Here is your profile!</h1>
            </div> 
        </div>
    )
}

export default Banner;
