import './App.css';

import React from "react";

function App() {
    const [counter, setCounter] = React.useState(0);
	
	//the same as this
	//const counterState = React.useState(0);
	//	const counter = counterState[0];
	//	const setCounter = counterState[1];
	
	const increment = () => {
		setCounter(counter + 1);
	}
	
	const decrement = () => {
		setCounter(counter - 1);
	}
	
	return (
    <div>
		<p>Counter</p>
		
		<p>{counter}</p>
		<button onClick={increment}>+</button>
		<button onClick={decrement}>-</button>
	</div>
  );
}

export default App;
