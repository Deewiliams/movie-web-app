import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from '../Components/Loading';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const PopularMoviesDetails = () => {
    let { movieId } = useParams();

    console.log("movie",movieId);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchSelectedMoviesDetails = async () => {
        setLoading(true);
        await axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=d86a765007a6b298c10937969b0a8623`
            )
            .then((response) => {
                setSelectedMovie(response.data);
                console.log(response.data);
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
    <Container>
      {loading ? (<Loading />) : (<>
  <br />
        <Card
          style={{ width: '32rem' }}
          className="mb-2"
        >
          <Card.Header>{selectedMovie.title} </Card.Header>
          <Card.Body>
            <Card.Img variant="top" height={600} src={`http://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} />
            <Card.Text>
            
             {selectedMovie.overview}
            </Card.Text>
          </Card.Body>
        </Card>
       

        </>)}
    </Container>
  
  )
}

export default PopularMoviesDetails