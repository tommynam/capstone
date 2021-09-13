import React from 'react'

const sideBarStyle = {
    display: "inline-block",
    flexDirection: "row-reverse column-reverse",
    justifyContent: "center"
};

export const SideBar = () => {
    return (
        <div className="sideBar" style={sideBarStyle}>
            <h3>Promote your Course</h3>
            <button>Education Institution</button>
            <h3>Start Course Search</h3>
            <button>Student</button>
        </div>
    )
};
