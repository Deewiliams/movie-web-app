import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetails from '../Components/MovieDetails';
import { useNavigate } from "react-router-dom";
import Loading from '../Components/Loading';

const UpcomingMoviesDetail = () => {
    let { upcomingMovieId } = useParams();
    let navigate = useNavigate();
    const [selectedUpcomingMovie, setSelectedUpcomingMovie] = useState([]);
    const [loading, setLoading] = useState(false)
  
    function handleClick() {
      navigate("/top_rated_movies");
    }
    const fetchRatedMoviesDetails = async () => {
      setLoading(true);
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${upcomingMovieId}?api_key=d86a765007a6b298c10937969b0a8623`
        )
        .then((response) => {
            setSelectedUpcomingMovie(response.data);
          setLoading(false)
        })
        .catch((err) => {
          console.err(err);
        });
    };
    useEffect(() => {
      fetchRatedMoviesDetails();
    }, [upcomingMovieId]);
  return (
    <>
    {loading ? (<Loading />) : (<>
      <MovieDetails
        title={selectedUpcomingMovie.title}
        image={selectedUpcomingMovie.poster_path}
        overview={selectedUpcomingMovie.overview}
        release_date={selectedUpcomingMovie.release_date}
        vote_count={selectedUpcomingMovie.vote_count}
        handleClick={handleClick}
      />
    </>)}
  </>
  )
}

export default UpcomingMoviesDetail