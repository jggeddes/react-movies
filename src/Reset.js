// JavaScript Document
const Reset = (cancel) => {
	//props is an object
	
	const {onClickReset, children} = cancel;
	//This is the same as
	//const onClickFunction = props.onClickFunction
	//const buttonText = props.buttonText
	return (
		<button 
			onClick={onClickReset}
		>
			Reset
		</button>
	)
}

export default Reset;  