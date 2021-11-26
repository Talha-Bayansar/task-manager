import React, { useEffect, useState } from 'react';
import { Task, useTasksContext } from '../..';

export const TasksPage = () => {
	const { getTasks } = useTasksContext();
	const [tasks, setTasks] = useState<Task[]>([]);
	useEffect(() => {
		getTasks().then((data) => setTasks(data));
	}, [getTasks]);
	return (
		<div>
			List of tasks
			<div>
				{tasks.map((task) => (
					<div key={task.id}>
						<p>ID: {task.id}</p>
						<p>description: {task.description}</p>
						<p>isDone: {task.isDone ? 'true' : 'false'}</p>
						<p>deadline: {task.deadline}</p>
					</div>
				))}
			</div>
		</div>
	);
};
