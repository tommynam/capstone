import React from 'react'

const styles = {
    backgroundColor: "green",
    color: "white",
    display: "flex",
    justifyContent: "center",
    flexShrink: 0,
    
}

const Footer = () => {
    return (
        <div className="fixed-bottom" style={styles}>
            <h5>&copy; iStudy Abroad</h5>
        </div>
    )
}

export default Footer;