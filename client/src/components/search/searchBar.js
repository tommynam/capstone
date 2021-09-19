import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = ({searchQuery,setSearchQuery}) => {

    //UseHistory hook to render search within SPA paradigm rather than reloading
    const history = useHistory();   
    
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
    };

    return (
        <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search courses or locations</span>
        </label>
            <input
                type="text"
                id="header-search"
                value={searchQuery}
                onInput={e=>setSearchQuery(e.target.value)}
                placeholder="Search through courses or locations"
                name="s" 
            />
        <button type="submit">Search</button>
    </form>
    )
}

export default SearchBar;
