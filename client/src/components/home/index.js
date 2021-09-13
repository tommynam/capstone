import React from 'react';
import BackgroundImage from '../../assets/home.jpeg';
import { SideBar } from "./sidebar";

const styles = {
    backgroundImage: `url(${BackgroundImage})`,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundSize: "cover",
    color: "white"
};

const infoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
    
};

const Home = () => {
    return (
        <div style={styles}>
            <div className="infoBox" style={infoStyle}>
                <h1>iSftudy Abroad</h1>
                <p>
                iStudyAbroad is a search engine that helps you plan for your courses and immigration requirements. Start today and help us plan your future.
                </p>
                <SideBar />
            </div>
        </div>
    )
};

export default Home;
