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
        `https://api.themoviedb.org/3/movie/${ratedMovieId}?api_key=d86a765007a6b298c10937969b0a8623`
      )
      .then((response) => {
        setSelectedRatedMovie(response.data);
        console.log('getting rated movies',response.data);
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