import React from 'react';
import Button from 'react-bootstrap/Button';

const leftStyle = {
    color: "white"
};

export const LeftBar = () => {
    return (
        <div style={leftStyle}>
            <h1>iStudy Abroad</h1>
            <h3>Begin your journey with us today!</h3>
            <Button variant="success">Sign in</Button>{''}
        </div>
    )
}
