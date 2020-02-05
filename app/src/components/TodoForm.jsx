import React, { useState } from "react";
import { Form, Input, Button, Icon } from "semantic-ui-react";

const TodoForm = props => {
	const [newTodo, setNewTodo] = useState("");

	const handleChange = e => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (newTodo.length > 2) {
			props.addTodo(newTodo);
			setNewTodo("");
		}
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
			<Button color='blue' onClick={() => props.addTodo}>
				Add Todo
			</Button>
		</Form>
	);
};

export default TodoForm;
