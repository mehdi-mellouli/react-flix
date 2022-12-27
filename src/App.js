import React ,  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Component/MovieList';
import Data from './Data.js';
import NavBar from './Component/NavBar';
import AddMovie from './Component/AddMovie';


function App() {
  const [movies,setMovies]=useState(Data);
  const [filter,setFilter] = useState("");
const handleFilter = (val)=>{
  setFilter(val)
}
// console.log(filter)
const handleAddMovie = (val)=>{
  setMovies([...movies,val])
}
  return (
    <div className="App">
      <NavBar handleFilter={handleFilter } />
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList list={movies.filter(elm=> elm.title.toLowerCase().includes(filter.toLowerCase())) || movies.filter(elm=>elm.rating.includes(filter))}  />
    </div>
  );
}

export default App;
