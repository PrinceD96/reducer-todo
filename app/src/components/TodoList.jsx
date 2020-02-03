import React, { useReducer } from "react";
import { todo, todoReducer } from "../reducers";
import TodoForm from "./TodoForm";

const TodoList = () => {
	const [state, dispatch] = useReducer(todoReducer, todo);

	const addTodo = newTodo => {
		dispatch({
			type: "ADD_TODO",
			payload: { item: newTodo, completed: false, id: Date.now() }
		});
	};

	const toggleTodo = id => {
		dispatch({ type: "TOGGLE_TODO", payload: id });
	};

	return (
		<div className='todo_list'>
			<TodoForm addTodo={addTodo} />
			{state.map((todo, idx) => (
				<div
					className='todo'
					key={idx}
					onClick={() => toggleTodo(todo.id)}
					style={todo.completed ? { textDecoration: "line-through" } : {}}
				>
					<p>{todo.item}</p>
				</div>
			))}
		</div>
	);
};

export default TodoList;
