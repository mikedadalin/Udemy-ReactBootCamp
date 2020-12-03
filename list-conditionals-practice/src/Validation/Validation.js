import React from 'react'

const validation = (props) => {
	let message;
	if(props.length < 5) message = "Text too short!"
	else message = "Text is long enough!"
	return (
		<div>{message}</div>
	)
}

export default validation