import React, { createContext, useContext, useState } from 'react';
import { Task } from '..';
import { useHttpContext } from '../../http';

interface ITasksContext {
	getTasks: () => Promise<Task[]>;
	getTasksToday: () => Promise<Task[]>;
	getTasksDone: () => Promise<Task[]>;
}

const TasksContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }) => {
	const tasksUrl = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;
	const { get } = useHttpContext();

	const getTasks = async () => {
		const data = await get<Task[]>(tasksUrl);
		console.log(data);
		return data;
	};

	const getTasksToday = async () => {
		const data = await get<Task[]>(`${tasksUrl}/today`);
		console.log(data);
		return data;
	};

	const getTasksDone = async () => {
		const data = await get<Task[]>(`${tasksUrl}/done`);
		console.log(data);
		return data;
	};

	const api = {
		getTasks,
		getTasksToday,
		getTasksDone
	};

	return (
		<TasksContext.Provider value={api}>{children}</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);
