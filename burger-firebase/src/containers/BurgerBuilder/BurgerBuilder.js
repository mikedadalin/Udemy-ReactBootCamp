import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
		salad: 0.5,
		bacon: 0.7,
		meat: 1.8,
		cheese: 0.6
}

class BurgerBuilder extends Component {
	
	// constructor(props) {
	// 	super(props)
	// 	this.state = {}
	// }

	state = {
		ingredients: null,
		totalPrice: 4,
		purchaseable: false,
		purchasing: false,
		loading: false,
		error: false
	}

	componentDidMount() {
		axios.get("https://react-my-burger-5ce9a.firebaseio.com/ingredients.json")
			.then(response => {
				this.setState({ingredients: response.data})
			})
			.catch(error => {
				this.setState({error: true})
			})
	}

	
	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients).map(igKey => {
			return ingredients[igKey]
		})
		.reduce((sum, el) => {
			return sum + el
		},0)
	
		this.setState({purchaseable: sum > 0})
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type]
		const updatedCount = oldCount + 1
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount
		const priceAddition = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = priceAddition + oldPrice
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		})
		this.updatePurchaseState(updatedIngredients)
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type]
		
		if(oldCount <= 0) return;

		const updatedCount = oldCount - 1
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount
		const priceDeduction = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice
		const newPrice = oldPrice - priceDeduction
		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice
		})
		this.updatePurchaseState(updatedIngredients)
	}

	purchaseHandler = () => {
		this.setState({purchasing: true })
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false})
	}

	purchaseContinueHandler = () => {		
		this.setState({loading: true})
		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: "Mike Lin",
				address: {
					street: "22 Super St",
					zipCode: "40351",
					state: "NY",
					country: "USA"
				},
				email: "test@test.com"
			},
			deliveryMethod: "fastest"
		}
		// send data to backend (firebase)		
		// don't forget .json
		axios.post("/order", order)
			.then(response => {
				this.setState({
					loading: false,
					purchasing: false
				})
			})
			.catch(error => {
				this.setState({
					loading: false,
					purchasing: false
				})
			})
	}

	render() {

		const disableInfo = {
			...this.state.ingredients
		}

		for(let key in disableInfo) {
			disableInfo[key] = (disableInfo[key] <= 0)
		}

		let orderSummary = null
		let burger = this.state.error ? <p>Ingreidents can't be loaded</p> : <Spinner />

		if(this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients} />	
					<BuildControls 
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						ordered={this.purchaseHandler}
						disabled={disableInfo}
						price={this.state.totalPrice}
						purchaseable={this.state.purchaseable}
					/>
				</Aux>)
			orderSummary = <OrderSummary 
				price={this.state.totalPrice}
				ingredients={this.state.ingredients} 
				purchaseCancelled={this.purchaseCancelHandler}
				purchaseContinued={this.purchaseContinueHandler}/>
		}
		
		if(this.state.loading){
			orderSummary = <Spinner />
		}


		return (
			<Aux>
				<Modal 
					show={this.state.purchasing} 
					modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios)
