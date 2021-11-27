import React, { useState } from 'react';
import { useTasksContext } from '../..';
import { InputField, SelectField, SubmitButton } from '../../../components';
import styles from './CreateTaskPage.module.scss';

export const CreateTaskPage = () => {
	const subjectOptions = [
		{ name: 'PAV', value: 'pav' },
		{ name: 'Stage', value: 'stage' },
		{ name: 'Biologie', value: 'biologie' }
	];

	const { createTask } = useTasksContext();
	const [formValues, setFormValues] = useState({
		subject: subjectOptions[0].value,
		description: '',
		deadline: ''
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
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
				options={subjectOptions}
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
