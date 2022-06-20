import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestMovies = () => {
    const [latestMovies, setLatestMovie] = useState([])
    const fetchLatestMovies = async () => {
        await axios
            .get(
                `${process.env.REACT_APP_BASE_URL}latest?api_key=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                setLatestMovie(response.data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    useEffect(() => {
        fetchLatestMovies();
    }, []);

    return (
        <>
            <div className="row">
                {latestMovies.map((movie) => (
                    <div className="col-sm-3" key={movie.id}>
                        <br />
                        <div className="card">
                            <img
                                className="rounded"
                                data-testid="poster_image"
                                src={`http://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                alt={movie.title}
                            />
                        </div>
                        <h3 className="card-title" data-testid="title">
                            {movie.title}
                        </h3>
                    </div>
                ))}
            </div>

        </>
    )
}

export default LatestMovies