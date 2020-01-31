import React, { useState, useReducer } from "react";
import { todo, todoReducer } from "../reducers";

const TodoList = () => {
	const [state, dispatch] = useReducer(todoReducer, todo);

	return (
		<div className='todo_list'>
			{state.map(todo => (
				<div className='todo'>
					<p>{todo.item}</p>
				</div>
			))}
		</div>
	);
};

export default TodoList;
