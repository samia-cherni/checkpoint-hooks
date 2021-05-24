import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Movies,Search,Rate}) => {
    return (
        <div className="list">
            {Movies.filter((Movie)=>Movie.title.toLowerCase().includes(Search.toLowerCase()))
            .filter((Movie)=>parseInt(Movie.rating)>=parseInt(Rate))
            .map((Movie)=><MovieCard Movie={Movie} key={Movie.id}/>)}
        </div>
    )
}

export default MovieList
