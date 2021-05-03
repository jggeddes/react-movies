import './App.css';
import React from "react";
import Button from "./Button.js";

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
		
		
		<Button
			onClickFunction={increment}
			buttonText="+"   //Same as: buttonText={"+"}
		/>
		<Button
			onClickFunction={decrement}
			buttonText="-"   //Same as: buttonText={"-"}
		/>
		
	</div>
  );
}

export default App;
