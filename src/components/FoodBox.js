import 'bulma/css/bulma.css';
import React, { Component } from 'react'
import foodsJson from '../foods.json'
import FoodBoxDetails from './FoodBoxDetails'
import AddFoodForm from './AddFoodForm'
import SearchFood from './SearchFood'

class FoodBox extends Component {
     
    state = {
        foods: foodsJson,
        showForm: false,
        filteredFood: []
    }

//-------------------------------------------------------
    handleAddFoodForm = (event) => {
        event.preventDefault()
        let name = event.target.name.value
        let calories = event.target.calories.value
        //let image = event.target.image.value

        let newFoodItem = {
            name: name,
            calories: calories,
            //image: image
        }

        this.setState({
            showForm: false,
            foods: [newFoodItem, ...this.state.foods],
            filteredFood: [newFoodItem, ...this.state.filteredFood]
            
        })
    }
//-------------------------------------------------------

handleShowFormFood = () => {
    this.setState({showForm: true})
}
//-------------------------------------------------------

handleFoodChange = (event) => {
    let searchFoodName = event.target.value.toLowerCase()
    let filteredFoodList = this.state.foods.filter((singleFood) => {
        return singleFood.name.toLowerCase().includes(searchFoodName)
    })

    this.setState({
        filteredFood: filteredFoodList 
    })
    }
//-------------------------------------------------------

    render() {

        //destructuring
        const {filteredFood, showForm} = this.state

        return (
            <div>
            <SearchFood myChangeFood= {this.handleFoodChange}/>
            {showForm ? <AddFoodForm onAddFood={this.handleAddFoodForm}/> : <button onClick={this.handleShowFormFood}>Show Food</button>
            }
            {filteredFood.map((singleFood, lupita) => {

                return <FoodBoxDetails 
                    key={lupita}
                    name={singleFood.name}
                    image={singleFood.image}
                    calories={singleFood.calories}
                />
            })}
                
            </div>
        )
    }
}

export default FoodBox