import React, { useState, useEffect } from "react";
// import { Container,Row,Col } from 'react-bootstrap'
import axios from "axios";

const PopularMovies = () => {
const [PopularMovies,setPopularMovie] = useState([])
    const fetchPopularMovies = async () => {
        await axios
          .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=d86a765007a6b298c10937969b0a8623"
          )
          .then((response) => {
            setPopularMovie(response.data.results);
            console.log(response.data.results);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
      useEffect(() => {
        fetchPopularMovies();
      }, []);
  return (
<>
<div className="row">
{PopularMovies.map((movie) => (
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

export default PopularMovies