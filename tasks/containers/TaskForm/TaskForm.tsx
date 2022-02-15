import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Task } from '../..';
import { InputField, SelectField, SubmitButton } from '../../../components';
import { useSubjectsContext } from '../../../subjects';
import styles from './TaskForm.module.scss';

interface Props {
	onSubmit: (e: any, formValues: FormValues) => any;
	taskToUpdate?: Task;
	deadline?: any;
}

interface FormValues {
	subject: string;
	description: string;
	deadline: string;
}

export const TaskForm = ({ onSubmit, taskToUpdate, deadline }: Props) => {
	const { getSubjects } = useSubjectsContext();

	const { data, isLoading, error } = useQuery('subjects', getSubjects);

	const [formValues, setFormValues] = useState<FormValues>({
		subject: '',
		description: '',
		deadline: ''
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<>
			{isLoading ? (
				<div>Is loading...</div>
			) : (
				<form
					className={styles.taskForm}
					onChange={handleChange}
					onSubmit={(e) => onSubmit(e, formValues)}
				>
					<SelectField
						className={styles.formField}
						name="subject"
						data={data}
						value={taskToUpdate?.subject.id}
						label="Onderwerpen"
					/>
					<InputField
						className={styles.formField}
						label="Description"
						name="description"
						type="text"
						inputOptions={{ maxLength: 50, minLength: 0 }}
						required={true}
						value={taskToUpdate?.description}
					/>
					<InputField
						className={styles.formField}
						label="Deadline"
						name="deadline"
						type="datetime-local"
						value={
							deadline &&
							`${deadline.year}-${deadline.month}-${deadline.day}T${deadline.hour}:${deadline.minute}`
						}
					/>
					<SubmitButton className={styles.formField} name="Create" />
				</form>
			)}
		</>
	);
};
