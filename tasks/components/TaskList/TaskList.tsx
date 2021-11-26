import React from 'react';
import { useQuery } from 'react-query';
import { TaskCard } from '..';
import styles from './TaskList.module.scss';

interface Props {
	fetchFunction: () => any;
}

export const TaskList = ({ fetchFunction }: Props) => {
	const { data, isLoading, error } = useQuery('tasks', fetchFunction);

	return (
		<div className={styles.taskList}>
			{isLoading
				? 'Is loading...'
				: data.map((task) => (
						<TaskCard
							className={styles.taskListItem}
							key={task.id}
							task={task}
						/>
				  ))}
		</div>
	);
};
