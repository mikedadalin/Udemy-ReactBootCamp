import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState( { loading: true } );
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( 'https://react-my-burger-5ce9a.firebaseio.com/order', order )
            .then( response => {
                this.setState( { loading: false } );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" className={classes.Input} name="name" placeholder="Your Name"/>
                    <input type="email" className={classes.Input} name="email" placeholder="Your Email"/>
                    <input type="text" className={classes.Input} name="street" placeholder="Street"/>
                    <input type="text" className={classes.Input} name="postal" placeholder="Postal Code Name"/>
                </form>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </div>
        )
    }
}


export default ContactData