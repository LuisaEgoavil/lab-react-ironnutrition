import React, {Component} from 'react'

class SearchFood extends Component {
    render () {
        return (
            <div>
                <input onChange={this.props.myChangeFood} type="text" placeholder="Search food"/>
            </div>
        )
    }
}

export default SearchFood