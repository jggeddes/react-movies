import './App.css';
import React, {useState} from "react";
import {movies} from "./movies.js";
import Button from "./Button.js";
import Reset from "./Reset.js";

function App() {
	
	const [currentMovie, setCurrentMovie] = useState(null);
	
	

	
	console.log(currentMovie);
	return (
    <div>
		<h1>Movies</h1>
		
		{
			currentMovie ? 
				<div class="movieInformation">
					<p>{currentMovie.title}</p> 
					<p>{currentMovie.description}</p> 
					<img src={currentMovie.posterUrl} alt="" height={250} class="center"/>
					<p>{currentMovie.rating}</p>
					<p>{currentMovie.director}</p>
					<p>{currentMovie.releaseYear}</p>
					<p>{currentMovie.categories.join(", ")}</p>
				</div>
				: 
				<h2>Please Select a Movie</h2>
		}
		
		{
    		movies.map((movie, index) => {
        	// this is where the logic happens
				return (
					<Button key={movie.title} onClickFunction={() => setCurrentMovie(movie)}>
						<p>{movie.title}</p>
						<img src={movie.posterUrl} alt="" height={250}/>
					</Button>
				)
    		})
		}
		
	</div>
  );
}

export default App;
