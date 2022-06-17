import React, { useState, useEffect } from "react";
import axios from "axios";

const TopRatedMovies = () => {
    const [ratedMovies, setRatedMovie] = useState([])
    const fetchTopRatedMovies = async () => {
        await axios
            .get(
                "https://api.themoviedb.org/3/movie/top_rated?api_key=d86a765007a6b298c10937969b0a8623"
            )
            .then((response) => {
                setRatedMovie(response.data.results);
                console.log(response.data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    useEffect(() => {
        fetchTopRatedMovies();
    }, []);
    return (
        <>
            <div className="row">
                {ratedMovies.map((movie) => (
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

export default TopRatedMovies