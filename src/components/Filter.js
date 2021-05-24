import React from "react";
import { FormControl } from "react-bootstrap";

const Filter = ({ setSearch, setRate }) => {
  return (
    <div className="filter">
      <FormControl
        className="m-3"
        placeholder="Search by movie title"
        onChange={(e) => setSearch(e.target.value)}
      />
      <FormControl
        className="m-3"
        placeholder="Search by rating"
        onChange={(e) => setRate(e.target.value)}
        onFocus={(e) => setRate("0")}
      />
    </div>
  );
};

export default Filter;
