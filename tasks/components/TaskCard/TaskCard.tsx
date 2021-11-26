import React from 'react';
import { Task } from '../..';
import styles from './TaskCard.module.scss';

interface Props {
	task: Task;
}

export const TaskCard = ({ task }: Props) => {
	return (
		<div>
			<p>ID: {task.id}</p>
			<p>description: {task.description}</p>
			<p>isDone: {task.isDone ? 'true' : 'false'}</p>
			<p>deadline: {task.deadline}</p>
		</div>
	);
};
