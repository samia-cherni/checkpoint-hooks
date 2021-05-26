import React, { useState } from "react";
import { MovieInfo } from "./components/MovieInfo";
import MovieList from "./components/MovieList";
import AddMovies from "./components/AddMovies";
import Filter from "./components/Filter";
import Nav from './components/Nav';


function App() {
  const [Movies, setMovies] = useState(MovieInfo);
  const [Search,setSearch]=useState("");
  const [Rate,setRate]=useState("0");
  const Add = (newMovie) => {
    setMovies ([...Movies, newMovie]) ;
  };
  return (
    <div className="App">
      <Nav />
      <Filter setSearch={setSearch} Rate={Rate} setRate={setRate}/>
      <AddMovies Add={Add} setRate={setRate} />
      <MovieList Movies={Movies} Search={Search} Rate={Rate} />
    </div>
  );
}

export default App;
