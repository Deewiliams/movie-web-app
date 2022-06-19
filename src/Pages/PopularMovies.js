import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderTitle from "../Components/HeaderTitle";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const PopularMovies = () => {
    const [PopularMovies, setPopularMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPopularMovies = async () => {
        setLoading(true);
        await axios
            .get(
                "https://api.themoviedb.org/3/movie/popular?api_key=d86a765007a6b298c10937969b0a8623"
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
            {loading ? (<Loading />) : (<>
                <br />
                <HeaderTitle title='Most popular movies' />
                <div className="row">
                    {PopularMovies.map((movie) => (
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
            )}
        </>
    )
}

export default PopularMovies