import React, { useEffect, useState } from 'react'
import Search from './Search';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value)
        console.log('event',event);
    }

    const handleSearch = (event) => {
        event.preventDefault()
        searchForMovies();
    }

    const searchForMovies = async () => {
        axios.get(`https://api.themoviedb.org/3/search/query=${query}?api_key=d86a765007a6b298c10937969b0a8623`)
            .then((response) => {
                setSearchResults(response.data.results)
                console.log('searching', query);
            }).catch((err) => {
                console.error(err);
            })
    }
    return (
        <Search
            handleSearch={handleSearch}
            query={query}
            handleChange={handleChange}
        />
    )
}

export default SearchBar