import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderTitle from "../Components/HeaderTitle";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovie] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchUpcomingMovies = async () => {
        setLoading(true);
        await axios
            .get(
                `${process.env.REACT_APP_BASE_URL}upcoming?api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                setUpcomingMovie(response.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err.message);
            });
    };
    useEffect(() => {
        fetchUpcomingMovies();
    }, []);
    return (
        <>
            {loading ? (<Loading />) : (<>
                <br />
                <HeaderTitle title='Upcoming movies' />
                <div className="row">
                    {upcomingMovies.map((movie) => (
                        <div className="col-sm-3" key={movie.id}>
                            <br />
                            <Link to={`/upcoming_movie/${movie.id}`} >
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

export default UpcomingMovies