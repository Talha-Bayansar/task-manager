import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useTasksContext } from '../..';
import { InputField, SelectField, SubmitButton } from '../../../components';
import { Subject, useSubjectsContext } from '../../../subjects';
import { TaskDto } from '../../models/task.dto';
import styles from './CreateTaskPage.module.scss';

export const CreateTaskPage = () => {
	const { getSubjects } = useSubjectsContext();
	const router = useRouter();
	const { data, isLoading, error } = useQuery('subjects', getSubjects);

	const { createTask } = useTasksContext();

	const [formValues, setFormValues] = useState({
		subject: '',
		description: '',
		deadline: ''
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { deadline, description, subject } = formValues;
		const finalSubject = data.find((sub) => subject === sub.id);
		const taskDto: TaskDto = {
			deadline: deadline,
			description: description,
			subject: finalSubject
		};
		await createTask(taskDto);
		router.push('/');
	};

	return (
		<form
			className={styles.createTaskPage}
			onChange={handleChange}
			onSubmit={handleSubmit}
		>
			<SelectField
				className={styles.formField}
				name="subject"
				subjects={data}
				setFormValues={setFormValues}
				formValues={formValues}
			/>
			<InputField
				className={styles.formField}
				label="Description"
				name="description"
				type="text"
				inputOptions={{ maxLength: 50, minLength: 0 }}
				required={true}
			/>
			<InputField
				className={styles.formField}
				label="Deadline"
				name="deadline"
				type="datetime-local"
			/>
			<SubmitButton className={styles.formField} name="Create" />
		</form>
	);
};
