import { React, useState, useEffect, useSelector } from 'react';
import axios from 'axios';

const GetData = () => {

    //Set state variable and base URL to search - fetch with axios
    const [item, setItem] = useState(null);
    const client =  axios.create({
        baseURL: "localhost:5000/courses"
    })

    //Loads on start up - async function defined for getting data - then call the function outsisde declaration afterwards
    useEffect(()=>{
        async function getItem() {
            const response = await client.get("/");
            setItem(response.data);
        }
        getItem();
    });

    if (!item) return "No results to display";

    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
        </div>
    )
}

export default GetData;
