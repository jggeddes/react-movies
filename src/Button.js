// JavaScript Document
const Button = (props) => {
	//props is an object
	
	const {onClickFunction, children} = props;
	//This is the same as
	//const onClickFunction = props.onClickFunction
	//const buttonText = props.buttonText
	return (
		<button 
			onClick={onClickFunction}
		>
			{children}
		</button>
	)
}

export default Button;  