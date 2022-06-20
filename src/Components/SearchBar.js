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
        axios.get(`${process.env.REACT_APP_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchResults}`)
            .then((response) => {
                setSearchResults(response.data.results)

                console.log('searching',response.data.results);
            }).catch((err) => {
                console.error(err);
            })
    }
    `${process.env.REACT_APP_BASE_URL}${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    useEffect(() => {
    }, [])
    
    return (
        <Search
            handleSearch={handleSearch}
            query={searchResults}
            handleChange={handleChange}
        />
    )
}

export default SearchBar