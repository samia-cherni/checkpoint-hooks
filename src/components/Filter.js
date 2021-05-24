import React from "react";
import { Form, Row, Col, FormControl } from "react-bootstrap";
import StarRating from "./StarRating";

const Filter = ({ setSearch, Rate, setRate }) => {
  return (
    <div className="filter">
      <Form>
        <Row>
          <Col>
            <FormControl
              className="m-3"
              placeholder="Search by movie title"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col>
            <StarRating Rate={Rate} setRate={setRate} />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filter;
