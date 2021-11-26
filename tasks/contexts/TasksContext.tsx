import React, { createContext, useContext, useState } from 'react';
import { Task } from '..';
import { useHttpContext } from '../../http';

interface ITasksContext {
	getTasks: () => Promise<Task[]>;
}

const TasksContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }) => {
	const tasksUrl = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;
	const { get } = useHttpContext();

	const getTasks = async () => {
		const data = await get<Task[]>(tasksUrl);
		return data;
	};

	const api = {
		getTasks
	};

	return (
		<TasksContext.Provider value={api}>{children}</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);
