import React from 'react';
import PropsTypes from 'prop-types'
import { InputGroup, Form, Container, Button } from 'react-bootstrap';

const Search = (props) => {
  return (
    <Container>
    <InputGroup className="mb-3" onSubmit={props.handleSearch}>
        <Form.Control
         type="search"
         placeholder="Search"
         className="me-2"
         aria-label="Search"
         value={props.query}
         onChange={props.handleChange}
        />
        <Button id="basic-addon2">Search</Button>
      </InputGroup>
      </Container>
  )
};
Search.propsTypes = {
    query: PropsTypes.string.isRequired,
    handleSearch: PropsTypes.func.isRequired
}

export default Search;