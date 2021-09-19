import React, { useState } from 'react'
import SearchBar from './searchBar';
import TopNavBar from 'components/navbar/navbar';


//Filter the search by the query
const filterSearch = (items, query) => {
    if (!query) {
        return items;
    }
    return items.filter((item) => {
        const itemName = item.name.toLowerCase();
        return itemName.includes(query);
    });
};

const items = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

//Main function of component
const Search = () => {
    //Get search query from URL bar
    const { searchQ } = window.location;
    const query = new URLSearchParams(searchQ).get('s');
    //State for searchbar
    const [searchQuery, setSearchQuery] = useState(query || '');
    //Filter through the items based on the search query
    const filteredItems = filterSearch(items, searchQuery);


    return (
        <div>
            <TopNavBar />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ul>
                {filteredItems.map((item)=> (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default Search;
