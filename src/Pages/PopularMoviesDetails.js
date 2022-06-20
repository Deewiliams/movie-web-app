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
        `${process.env.REACT_APP_BASE_URL}${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
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