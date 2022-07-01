import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Form, InputGroup } from "react-bootstrap";
import HeaderTitle from "../Components/HeaderTitle";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const PopularMovies = () => {
    const [PopularMovies, setPopularMovie] = useState([]);
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false);

    const fetchPopularMovies = async () => {
        setLoading(true);
        await axios
            .get(
                `${process.env.REACT_APP_BASE_URL}popular?api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                setPopularMovie(response.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err.message);
            });
    };
    useEffect(() => {
        fetchPopularMovies();
    }, []);
    return (
        <>
            {loading ? (<Loading />) : (
                <>
                    <br />
                    <HeaderTitle title='Most popular movies' />
                    <Container>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={event => setQuery(event.target.value)}
                            />
                        </InputGroup>
                    </Container>
                    <div className="row">
                        {
                            PopularMovies.filter(movie => {
                                if (query === '') {
                                    return movie;
                                } else if (movie.title.toLowerCase().includes(query.toLowerCase())) {
                                    return movie;
                                }
                            }).map((movie) => (
                                <div className="col-sm-3" key={movie.id}>
                                    <br />
                                    <Link to={`/detail/${movie.id}`}>
                                        <div className="card">
                                            <img
                                                className="rounded"
                                                data-testid="poster_image"
                                                src={`http://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                        </div>
                                    </Link>
                                    <h3 className="card-title" data-testid="title">
                                        {movie.title}
                                    </h3>
                                </div>
                            ))}
                    </div>
                </>
            )

            }

        </>
    )
}



export default PopularMovies

