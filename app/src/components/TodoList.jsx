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

	// const deleteTodo = id => {
	// 	dispatch({ type: "DELETE_TODO", payload: id });
	// };

	const clearCompleted = () => {
		dispatch({ type: "CLEAR_COMPLETED", payload: "" });
	};

	return (
		<>
			<TodoForm addTodo={addTodo} />
			<div className='todo_list'>
				{state.map((todo, idx) => (
					<div
						className='todo'
						key={idx}
						onClick={() => toggleTodo(todo.id)}
						style={todo.completed ? { textDecoration: "line-through" } : {}}
					>
						<p>{todo.item}</p>
						{/* <button onClick={() => deleteTodo(todo.id)}>X</button> */}
					</div>
				))}
			</div>
			<button onClick={clearCompleted}>Clear Completed</button>
		</>
	);
};

export default TodoList;
