import React from 'react';
import BackgroundImage from '../../assets/home.jpeg';

const styles = {
    backgroundImage: `url(${BackgroundImage})`,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundSize: "cover",

};

const Home = () => {
    return (
        <div style={styles}>
            <p>Hello World</p>
        </div>
    )
};

export default Home;
