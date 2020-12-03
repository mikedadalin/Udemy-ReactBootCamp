import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems = (props) => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>Burger Builder</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
)

// the active here is a boolean value, so you can just pass in as a props
// don't need to write as active={true}

export default navigationItems