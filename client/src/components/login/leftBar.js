import React from 'react';
import { useState } from 'react';
import { Button } from "reactstrap";
import { useGetUsersQuery } from 'services/users';


const leftStyle = {
    color: "white"
};


export const LeftBar = () => {

    //Will fetch a list of users/data and also renders error/loading/success
    const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();

    return (
        <div style={leftStyle}>
            <h1>iStudy Abroad</h1>
            <h3>Begin your journey with us today!</h3>
            
        </div>
    )
}
