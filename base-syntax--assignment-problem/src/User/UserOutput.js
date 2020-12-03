import React from 'react'
import './UserOutput.css'

const useroutput = (props) => {
	return (
		<div className="useroutput">
			<p>User Name: <b>{props.username}</b></p>
			<p>{props.paragraphs[0]}</p>
			<p>{props.paragraphs[1]}</p>
		</div>
	)
}

export default useroutput