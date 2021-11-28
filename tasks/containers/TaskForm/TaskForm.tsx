import React, { useEffect, useState } from 'react';
import { InputField, SelectField, SubmitButton } from '../../../components';
import { Subject, useSubjectsContext } from '../../../subjects';
import styles from './TaskForm.module.scss';

interface Props {
	onSubmit: (e: any, formValues: FormValues) => any;
}

interface FormValues {
	subject: string;
	description: string;
	deadline: string;
}

export const TaskForm = ({ onSubmit }: Props) => {
	const { getSubjects } = useSubjectsContext();

	const [subjects, setSubjects] = useState<Subject[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [formValues, setFormValues] = useState<FormValues>({
		subject: '',
		description: '',
		deadline: ''
	});

	useEffect(() => {
		const fetchSubjects = async () => {
			setIsLoading(true);
			const data = await getSubjects();
			setSubjects(data);
			setFormValues({ ...formValues, subject: data[0].id });
			setIsLoading(false);
		};
		fetchSubjects();
	}, []);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({ ...formValues, [name]: value });
	};

	if (isLoading) return <div>Is Loading</div>;

	return (
		<form
			className={styles.taskForm}
			onChange={handleChange}
			onSubmit={(e) => onSubmit(e, formValues)}
		>
			<SelectField
				className={styles.formField}
				name="subject"
				subjects={subjects}
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
