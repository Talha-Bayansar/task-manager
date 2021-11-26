import React, { useEffect, useState } from 'react';
import { Task, TaskCard, useTasksContext } from '../..';
import { useAuthContext } from '../../../authentication';

export const TasksPage = () => {
	const { getTasks } = useTasksContext();
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		getTasks().then((data) => setTasks(data || []));
	}, [getTasks]);

	return (
		<div>
			List of tasks
			<div>
				{tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};
