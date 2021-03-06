import React from "react";
import './style.css';

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For Another Movie"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-light">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
