import React, { createContext, useContext, useState } from 'react';
import { Task } from '..';
import { useHttpContext } from '../../http';
import { TaskDto } from '../models/task.dto';

interface ITasksContext {
	getTasks: () => Promise<Task[]>;
	getTasksToday: () => Promise<Task[]>;
	getTasksDone: () => Promise<Task[]>;
	createTask: (taskDto: TaskDto) => Promise<void>;
	getTask: (id: string) => Promise<Task>;
	putTask: (task: Task) => Promise<void>;
}

const TasksContext = createContext<ITasksContext | null>(null);

export const TasksProvider = ({ children }) => {
	const tasksUrl = `${process.env.NEXT_PUBLIC_API_URL}/tasks`;
	const { get, post, put } = useHttpContext();

	const getTasks = async () => {
		const data = await get<Task[]>(tasksUrl);
		console.log(data);
		return data;
	};

	const getTask = async (id: string) => {
		const data = await get<Task>(`${tasksUrl}/${id}`);
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

	const createTask = async (taskDto: TaskDto) => {
		const data = await post(`${tasksUrl}`, taskDto);
		console.log(data);
	};

	const putTask = async (task: Task) => {
		const data = await put(`${tasksUrl}/${task.id}`, task);
		console.log(data);
	};

	const api = {
		getTasks,
		getTasksToday,
		getTasksDone,
		createTask,
		getTask,
		putTask
	};

	return (
		<TasksContext.Provider value={api}>{children}</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);
