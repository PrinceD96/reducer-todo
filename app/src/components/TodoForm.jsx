import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

const TodoForm = props => {
	const [newTodo, setNewTodo] = useState("");

	const handleChange = e => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.addTodo(newTodo);
		setNewTodo("");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				focus
				onChange={handleChange}
				type='text'
				name='todo'
				value={newTodo}
				placeholder='...todo'
			/>
			<Button>Add Todo</Button>
		</Form>
	);
};

export default TodoForm;
