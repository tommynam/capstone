import React, { useState } from 'react'

const getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=>{ 
        return item.title.indexOf(keywords) > -1;
    });
    console.log(filtered);
};

const Search = () => {
    return (
        <div>
            
        </div>
    )
};

export default Search;
