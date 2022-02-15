import React from 'react';
import { useQuery } from 'react-query';
import { TaskCard } from '..';
import { Tab } from '../..';
import styles from './TaskList.module.scss';

interface Props {
	tab: Tab;
}

export const TaskList = ({ tab }: Props) => {
	const { data, isLoading, error, refetch } = useQuery(
		tab.name,
		tab.fetchFunction
	);

	if (isLoading) return <span>Aan het laden...</span>;
	if (error || data['error']) return <span>Error</span>;

	return (
		<div className={styles.taskList}>
			{data.length > 0
				? data.map((task) => (
						<TaskCard
							className={styles.taskListItem}
							key={task.id}
							task={task}
							refetch={refetch}
						/>
				  ))
				: 'Er zijn geen taken hier!'}
		</div>
	);
};
