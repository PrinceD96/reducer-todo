import React, { useReducer } from "react";
import { todo, todoReducer } from "../reducers";
import TodoForm from "./TodoForm";
import { Grid, Button, Label, Icon } from "semantic-ui-react";

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
		dispatch({ type: "CLEAR_COMPLETED", payload: "" });
	};

	return (
		<>
			<TodoForm addTodo={addTodo} />
			<Grid columns={3}>
				<Grid.Row>
					{state.map((todo, idx) => (
						<Grid.Column>
							<Label
								className='todo'
								key={idx}
								onClick={() => toggleTodo(todo.id)}
								style={todo.completed ? { textDecoration: "line-through" } : {}}
							>
								{todo.item}
								<Icon name='delete' onClick={() => deleteTodo(todo.id)} />
							</Label>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
			<Button onClick={clearCompleted}>Clear Completed</Button>
		</>
	);
};

export default TodoList;
