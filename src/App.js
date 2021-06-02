import React, { useState } from "react";
import { MovieInfo } from "./components/MovieInfo";
import MovieList from "./components/MovieList";
import AddMovies from "./components/AddMovies";
import Filter from "./components/Filter";
import Nav from './components/Nav';
import Trailer from './components/Trailer';
import {Route,Switch} from 'react-router-dom';
import { Fragment } from "react";


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
      <Switch>
      <Route exact path="/" render={()=>
      <Fragment>
      <Filter setSearch={setSearch} Rate={Rate} setRate={setRate}/>
      <AddMovies Add={Add} setRate={setRate} setSearch={setSearch} />
      <MovieList Movies={Movies} Search={Search} Rate={Rate} />
      </Fragment>}
      />
      <Route path="/Movies/:id" render={(props) => <Trailer {...props} Movies={Movies}/>}/>
      </Switch>
    </div>
  );
}

export default App;
