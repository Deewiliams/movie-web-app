import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row,Col, Container,Card,Button } from 'react-bootstrap'

const MovieDetails = (props) => {
  return (
    <Container>
      <br />
      <Row>
        <Col small={4}>
        <div style={{ width: '32rem' }}>
        <Card.Title>{props.title} </Card.Title>
        <Link to={`/detail/${props.movieId}`}>
        <img  height={650} src={`http://image.tmdb.org/t/p/w500${props.image}`} alt={props.title} />
        </Link>
    </div>
        </Col>
        <Col small={8}><Card style={{ width: '32rem' }}>
      <Card.Body>
         <span> <h4>overview: </h4> <p>{props.overview}</p></span>
         <h4> vote :{props.vote_count}</h4> 
         <h4> Released Date: {props.release_date}</h4>
      </Card.Body>
      <Button variant="primary" onClick={props.handleClick}>Go Back</Button>
    </Card></Col>
      </Row>
    </Container>
  )
};

MovieDetails.propTypes = { 
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    vote_count: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default MovieDetails