import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetails from '../Components/MovieDetails';
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading';

const TopRatedMoviesDetail = () => {
    let { ratedMovieId } = useParams();
  let navigate = useNavigate();
  const [selectedRatedMovie, setSelectedRatedMovie] = useState([]);
  const [loading, setLoading] = useState(false)

  function handleClick() {
    navigate("/top_rated_movies");
  }
  const fetchRatedMoviesDetails = async () => {
    setLoading(true);
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}${ratedMovieId}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setSelectedRatedMovie(response.data);
        setLoading(false)
      })
      .catch((err) => {
        console.err(err);
      });
  };
  useEffect(() => {
    fetchRatedMoviesDetails();
  }, [ratedMovieId]);
  return (
    <>
    {loading ? (<Loading />) : (<>
      <MovieDetails
        title={selectedRatedMovie.title}
        image={selectedRatedMovie.poster_path}
        overview={selectedRatedMovie.overview}
        release_date={selectedRatedMovie.release_date}
        vote_count={selectedRatedMovie.vote_count}
        handleClick={handleClick}
      />
    </>)}
  </>
  )
}

export default TopRatedMoviesDetail