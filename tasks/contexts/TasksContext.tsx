import React, { createContext, useContext } from 'react';
import { Task } from '..';
import { useHttpContext } from '../../http';
import { TaskDto } from '../models/task.dto';

interface ITasksContext {
	getTasks: () => Promise<Task[]>;
	getTasksToday: () => Promise<Task[]>;
	getTasksDone: () => Promise<Task[]>;
	createTask: (taskDto: TaskDto) => Promise<void>;
	getTask: (id: string | string[]) => Promise<Task>;
	putTask: (id: string, task: TaskDto) => Promise<void>;
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
		const deadline = new Date(taskDto.deadline).toISOString();

		const data = await post(`${tasksUrl}`, {
			...taskDto,
			deadline: deadline
		});
		console.log(data);
	};

	const putTask = async (id: string, task: TaskDto) => {
		const deadline = new Date(task.deadline).toISOString();
		const data = await put(`${tasksUrl}/${id}`, {
			...task,
			deadline: deadline
		});
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
