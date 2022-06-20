import React from 'react'
import { Navbar,Container,Nav,Form,Button,FormControl} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Movie app</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Most popular movies</Nav.Link>
        <Nav.Link href="/upcoming_movies">Upcoming movies</Nav.Link>
        <Nav.Link href="/latest_movies">Latest movies</Nav.Link>
        <Nav.Link href="/top_rated_movies">Top Rated movies</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation