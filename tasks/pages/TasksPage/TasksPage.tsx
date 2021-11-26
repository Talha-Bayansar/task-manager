import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Task, TaskCard, useTasksContext } from '../..';
import { useAuthContext } from '../../../authentication';

export const TasksPage = () => {
	const { getTasks } = useTasksContext();

	const { data, isLoading, error } = useQuery('tasks', getTasks);

	return (
		<div>
			List of tasks
			<div>
				{isLoading
					? 'Is loading...'
					: data.map((task) => (
							<TaskCard key={task.id} task={task} />
					  ))}
			</div>
		</div>
	);
};
