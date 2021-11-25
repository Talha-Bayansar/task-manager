import React, { createContext, useContext, useState } from 'react';
import { useHttpContext } from '../../http';

const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
	const tasksUrl = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;
	const { get } = useHttpContext();

	const getTests = async () => {
		await get(tasksUrl);
	};

	const api = {
		getTests
	};

	return (
		<TasksContext.Provider value={api}>{children}</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);
