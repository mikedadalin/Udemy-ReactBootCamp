import React from 'react'

const userinput = (props) => {
	return (
		<div className="userinput">
			Enter Username:
			<input type="text" onChange={props.changed} value={props.username}/>
		</div>
	)
}

export default userinput