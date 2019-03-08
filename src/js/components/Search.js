import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const Search =({
  currentSearch,
  handleChange
}) => {
  return (
    <InputGroup className="mb-3 accountSearch">
            <FormControl
              placeholder="Search for an account, owner, application, best practices &amp; more"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={currentSearch}
              onChange={(e) => handleChange(e)}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary"><i className="fa fa-search" /></Button>
            </InputGroup.Append>
          </InputGroup>
  )
}

export default Search;