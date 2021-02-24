import React, {Component} from 'react'

class AddFoodForm extends Component {

    render() {

        // destructuring to make our code smaller 
        const {onAddFood} = this.props

        return (
            <form onSubmit={onAddFood}>
                <input name="name" type="text" placeholder="Name"/>
                <input name="calories" type="text" placeholder="Number of Calories"/>
                <input name="image" type="text" placeholder="Put your image here"></input>
                <button type="submit">Add Food</button>

            </form>
        )
    }
}

export default AddFoodForm