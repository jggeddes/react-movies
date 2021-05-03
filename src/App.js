import './App.css';
import React, {useState} from "react";
import {movies} from "./movies.js";

function App() {
	
	const [currentMovie, setCurrentMovie] = useState(null);
	
	console.log(currentMovie);
	return (
    <div>
		<h1>Movies</h1>
		
		{
    		movies.map((movie, index) => {
        	// this is where the logic happens
				return (
					<button key={movie.title} onClick={() => setCurrentMovie(movie)}>
						<p>{movie.title}</p>
						<img src={movie.posterUrl} alt="" height={250}/>
					</button>
				)
    		})
		}
		
		{
			currentMovie ? 
				<>
					<p>{currentMovie.title}</p> 
					<p>{currentMovie.description}</p> 
					<img src={currentMovie.posterUrl} alt="" height={250}/>
					<p>{currentMovie.rating}</p>
					<p>{currentMovie.director}</p>
					<p>{currentMovie.releaseYear}</p>
					<p>{currentMovie.categories.join(", ")}</p> 
				</>
				: 
				<p>Please Select a Movie for further deatails</p>
		}
		
	</div>
  );
}

export default App;
