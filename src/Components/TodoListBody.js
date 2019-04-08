import React from 'react';
import TodoListItem from './TodoListItem';

export const TodoListBody = (props) => {
    return (
        <ul className="list-group">
            {props.itens.map((item,index) => (
                <TodoListItem key={index} index={index} item={item} remove={props.removeFromItens}></TodoListItem>                              
            ))}
        </ul>
    );
}