export const todo = [
	{
		item: "Build a simple reducer",
		completed: false,
		id: 5648365987
	},
	{
		item: "Set up state",
		completed: false,
		id: 9876543210
	}
];

export const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, action.payload];
		case "TOGGLE_TODO":
			return state.map(todo => {
				if (todo.id === action.payload) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			});
		case "DELETE_TODO":
			return state.filter(todo => todo.id !== action.payload);
		case "CLEAR_COMPLETED":
			return state.filter(todo => !todo.completed);
		default:
			return state;
	}
};
