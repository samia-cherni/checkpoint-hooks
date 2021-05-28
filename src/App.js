import React, { useState } from "react";
import { MovieInfo } from "./components/MovieInfo";
import MovieList from "./components/MovieList";
import AddMovies from "./components/AddMovies";
import Filter from "./components/Filter";
import Nav from './components/Nav';
import Trailer from './components/Trailer';
import {Route} from 'react-router-dom';


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
      <Route exact path="/">
      <Filter setSearch={setSearch} Rate={Rate} setRate={setRate}/>
      <AddMovies Add={Add} setRate={setRate} />
      <MovieList Movies={Movies} Search={Search} Rate={Rate} />
      </Route>
      <Route path="/Trailer/:id" render={(props) => <Trailer {...props} Movies={Movies}/>}/>
    </div>
  );
}

export default App;
