import React, { Component } from 'react';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
    }

    onRemove = () =>{
        const{index, remove} = this.props;
        remove(index);
    }

    render() { 
        return (  
            <li className="list-group-item">
            <span>{this.props.item}</span>
            <button  className="btn btn-danger float-right" onClick={this.onRemove} type='button'>X</button>
            </li>
        );
    }
}
 
export default TodoListItem;