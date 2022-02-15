import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Task, TaskForm, useTasksContext } from '../..';
import { InputField, SelectField, SubmitButton } from '../../../components';
import { parseToInputDate } from '../../../helperFunctions';
import { useSubjectsContext } from '../../../subjects';
import styles from './UpdateTaskPage.module.scss';

interface Props {
	task: Task;
}

export const UpdateTaskPage = ({ task }: Props) => {
	const { getSubjects } = useSubjectsContext();
	const { putTask } = useTasksContext();
	const router = useRouter();
	const date = new Date(task.deadline);
	const deadline = parseToInputDate(date);
	const [formValues, setFormValues] = useState({
		subject: task.subject.id,
		description: task.description,
		deadline: deadline
	});

	const { data, isLoading, error } = useQuery('subjects', getSubjects);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formValues);
		await putTask(task.id, formValues);
		router.push('/');
	};

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setFormValues({ ...formValues, [name]: value });
	};

	if (isLoading) return <span>Aan het laden...</span>;
	if (error || data['error']) return <span>Error</span>;

	return (
		<div className={styles.updateTaskPage}>
			<form className={styles.taskForm} onSubmit={handleSubmit}>
				<SelectField
					className={styles.formField}
					name="subject"
					data={data}
					label="Onderwerp"
					value={formValues.subject}
					onChange={handleChange}
					required={true}
				/>
				<InputField
					className={styles.formField}
					label="Description"
					name="description"
					type="text"
					inputOptions={{ maxLength: 50, minLength: 0 }}
					required={true}
					value={formValues.description}
					onChange={handleChange}
				/>
				<InputField
					className={styles.formField}
					label="Deadline"
					name="deadline"
					type="datetime-local"
					value={formValues.deadline}
					onChange={handleChange}
				/>
				<SubmitButton className={styles.formField} name="Update" />
			</form>
		</div>
	);
};
