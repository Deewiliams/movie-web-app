import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetails from '../Components/MovieDetails';
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading';

const PopularMoviesDetails = () => {
  let { movieId } = useParams();
  let navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [loading, setLoading] = useState(false)


  function handleClick() {
    navigate("/");
  }
  const fetchSelectedMoviesDetails = async () => {
    setLoading(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d86a765007a6b298c10937969b0a8623`
      )
      .then((response) => {
        setSelectedMovie(response.data);
        setLoading(false)
      })
      .catch((err) => {
        console.err(err);
      });
  };
  useEffect(() => {
    fetchSelectedMoviesDetails();
  }, [movieId]);

  return (
    <>
      {loading ? (<Loading />) : (<>
        <MovieDetails
          title={selectedMovie.title}
          image={selectedMovie.poster_path}
          overview={selectedMovie.overview}
          release_date={selectedMovie.release_date}
          vote_count={selectedMovie.vote_count}
          handleClick={handleClick}
        />
      </>)}
    </>
  )
}

export default PopularMoviesDetails