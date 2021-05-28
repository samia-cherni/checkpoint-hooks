import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Trailer = ({ match, Movies }) => {
  var details = Movies.find((d) => d.id.toString() === match.params.id);
  var movieDetails;
  if (details)
    movieDetails = (
      <Container>
        <Link to="/"><img src="/back.png" alt="go back" className="m-3"style={{width:'5%'}}/></Link>
        <h1>{details.title}</h1>
        <Row>
          <Col>
            <iframe
              width="560px"
              height="315px"
              src={details.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col>
          <Alert variant='dark'>
          <Alert.Heading>Plot:</Alert.Heading>
            <p>
            {details.description}
            </p>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  return <div>{movieDetails}</div>;
};

export default Trailer;
