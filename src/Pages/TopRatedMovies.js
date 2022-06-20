import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderTitle from '../Components/HeaderTitle';
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const TopRatedMovies = () => {
    const [ratedMovies, setRatedMovie] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTopRatedMovies = async () => {
        setLoading(true);
        await axios
            .get(
                `${process.env.REACT_APP_BASE_URL}top_rated?api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                setRatedMovie(response.data.results);
                setLoading(false)
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    useEffect(() => {
        fetchTopRatedMovies();
    }, []);
    return (
        <>
            {loading ? (<Loading />) : (<>
                <br />
                <HeaderTitle title='Top rated movies' />
                <div className="row">
                    {ratedMovies.map((movie) => (
                        <div className="col-sm-3" key={movie.id}>
                            <br />
                            <Link to={`/rated_movie/${movie.id}`}>
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
            </>)}


        </>
    )
}

export default TopRatedMovies