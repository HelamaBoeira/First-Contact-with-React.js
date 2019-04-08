import React, { Component } from 'react';
import TodoForm from './../Components/TodoForm';
import {TodoListBody} from './../Components/TodoListBody';

class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            itens: []
        }
    }
    pushToItens = (value) =>{
        this.setState({
            itens: [...this.state.itens,value]
        })
    }

    removeFromItens = (index) => {
        const {itens} = this.state;
        itens.splice(index,1);
        this.setState(itens);
    }

    render() { 
        const{ itens } = this.state;
        return (  
            <div id="app" className="container">
            <h2>TodoList</h2>
                <TodoForm pushToItens={this.pushToItens}></TodoForm>
                <hr />
                <TodoListBody itens={itens} removeFromItens={this.removeFromItens} />
            </div>
        );
    }
}
 
export default TodoListApp;