import React from "react";
import {Card} from 'react-bootstrap'


const MovieCard = ({ Movie }) => {
    const star=parseInt(Movie.rating);
    return (
    <div>
        <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img variant="top" src={Movie.posterURL} />
        <Card.Body>
            <Card.Title style={{color:'#234E5A'}}>{Movie.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{Movie.rating}/10</Card.Subtitle>
            <Card.Text>
            {[...[...Array(star)].map((_) => <span key={Math.random()} style={{color:'red'}}>&#9733;</span>),...[...Array(10-star)].map((_) => <span key={Math.random()}style={{color:'grey'}}>&#9734;</span>)]}
            </Card.Text>
            <Card.Text>
            {Movie.description}
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
    );
};

export default MovieCard;
