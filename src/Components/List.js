import React, {Component} from 'react';

class List extends Component{
    constructor(){
        super()
        this.state = {
            movies: [],

        }
    }
    render(){
        return( <h1>This is the List Component</h1>
        )
    }
}
export default List;