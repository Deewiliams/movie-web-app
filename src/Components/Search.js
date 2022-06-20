import React from 'react';
import PropsTypes from 'prop-types'
import { InputGroup, Form, Container, Button } from 'react-bootstrap';

const Search = (props) => {
  return (
    <Container>
        <form onSubmit={props.handleSearch}>
    <InputGroup className="mb-3">
        <Form.Control
         type="search"
         placeholder="Search"
         className="me-2"
         aria-label="Search"
         value={props.searchResults}
         onChange={props.handleChange}
        />
        <Button id="basic-addon2">Search</Button>
      </InputGroup>
      </form>
      </Container>
  )
};
Search.propsTypes = {
    searchResults: PropsTypes.string.isRequired,
    handleSearch: PropsTypes.func.isRequired
}

export default Search;