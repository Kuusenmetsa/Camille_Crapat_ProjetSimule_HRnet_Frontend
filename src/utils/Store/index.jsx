import { configureStore, createSlice } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
	name: 'employees',
	initialState: {
		employees: [],
	},
	reducers: {
		addEmployee: (state, action) => {
			state.employees.push(action.payload.employee);
		},
	},
});

export const { addEmployee } = employeesSlice.actions;

export const store = configureStore({
	reducer: {
		Employees: employeesSlice.reducer,
	},
});
