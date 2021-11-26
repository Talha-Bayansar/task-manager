import React from 'react';
import { useQuery } from 'react-query';
import { TaskCard } from '..';
import { Tab } from '../..';
import styles from './TaskList.module.scss';

interface Props {
	tab: Tab;
}

export const TaskList = ({ tab }: Props) => {
	const { data, isLoading, error } = useQuery(tab.name, tab.fetchFunction);

	return (
		<div className={styles.taskList}>
			{isLoading
				? 'Is loading...'
				: data.length > 0
				? data.map((task) => (
						<TaskCard
							className={styles.taskListItem}
							key={task.id}
							task={task}
						/>
				  ))
				: 'There are no tasks here!'}
		</div>
	);
};
