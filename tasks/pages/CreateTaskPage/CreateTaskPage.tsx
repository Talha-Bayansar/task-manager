import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { TaskForm, useTasksContext } from '../..';
import { TaskDto } from '../../models/task.dto';
import styles from './CreateTaskPage.module.scss';

export const CreateTaskPage = () => {
	const router = useRouter();

	const { createTask } = useTasksContext();

	const handleSubmit = async (e, formValues) => {
		e.preventDefault();
		const { deadline, description, subject } = formValues;
		const taskDto: TaskDto = {
			deadline: deadline,
			description: description,
			subject: subject
		};
		await createTask(taskDto);
		router.push('/');
	};

	return (
		<div className={styles.createTaskPage}>
			<TaskForm onSubmit={handleSubmit} />
		</div>
	);
};
