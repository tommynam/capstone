import React from 'react';
import TopNavBar from 'components/navbar/navbar';
import Footer from 'components/footer';
import Background from "../../assets/home.jpeg"

const styles = {
    backgroundImage: `url(${Background})`,
    height: "50vh",
}

const bottomDiv = {
    display: "flex",
    justifyContent: "space-evenly",
    margin: 60,
    
}

const Contact = () => {
    return (
        <div>
            <TopNavBar />
            <div className="middleBanner" style={styles}>
                <h1>Contact Us</h1>
                <p>iStudyAbroad is a search engine that combines planning your studies and immigration requirements into one.</p>
                </div>
            <div className="bottom" style={bottomDiv}>
                <div className="address"> 
                    <h3>Address</h3>
                    <p>Hong Kong</p>
                    </div>
                <div className="phone">
                    <h3>Phone</h3>
                    <p>+852 6806-5280</p>
                    </div>
                <div className="email">
                    <h3>Email</h3>
                    <p>maklokyi2022@gmail.com</p>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
