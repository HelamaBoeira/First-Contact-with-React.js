import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    
    onAdd = (event) => {       
        const{value} = this.state;
        if(value){
            this.props.pushToItens(value);
        }
        this.setState({
            value: ''
        });
           
    }

    render() { 
       
        return (
            <div className="row">
                <div className="col-md-6">
                    <input className="form-control" name="todo" value={this.state.value} placeholder="Digite Algo"   onChange={this.onChange}></input>
                </div>
                <button className="btn btn-primary" type="button" onClick={this.onAdd}>Adicionar</button>
            </div>
         );
    }
}
export default TodoForm;