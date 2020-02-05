import React, { useReducer } from "react";
import { todo, todoReducer } from "../reducers";
import TodoForm from "./TodoForm";
import { Grid, Button, Label, Icon, Checkbox } from "semantic-ui-react";

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

	const deleteTodo = id => {
		dispatch({ type: "DELETE_TODO", payload: id });
	};

	const clearCompleted = () => {
		dispatch({ type: "CLEAR_COMPLETED", payload: null });
	};

	return (
		<>
			<div className='header'>
				<TodoForm addTodo={addTodo} />
				<Button color='red' className='clear_btn' onClick={clearCompleted}>
					Clear Completed
				</Button>
			</div>
			<div className='todo_list'>
				{state.map((todo, idx) => (
					<Checkbox
						label={{ children: `${todo.item}` }}
						className='todo'
						color='black'
						key={idx}
						onClick={() => toggleTodo(todo.id)}
						style={todo.completed ? { textDecoration: "line-through" } : {}}
					>
						{todo.item}
						<Icon name='delete' onClick={() => deleteTodo(todo.id)} />
					</Checkbox>
				))}
			</div>
		</>
	);
};

export default TodoList;
