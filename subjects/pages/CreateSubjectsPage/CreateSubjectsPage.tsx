import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useSubjectsContext } from '../..';
import { InputField, SubmitButton } from '../../../components';
import styles from './CreateSubjectsPage.module.scss';
import { SketchPicker } from 'react-color';

export const CreateSubjectsPage = () => {
	const router = useRouter();
	const { createSubject } = useSubjectsContext();
	const [formValues, setFormValues] = useState({
		color: '#fff',
		title: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createSubject(formValues);
		router.push('/subjects');
	};

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleColorChange = (color: any) => {
		setFormValues({ ...formValues, color: color.hex });
	};

	return (
		<div className={styles.updateTaskPage}>
			<form className={styles.taskForm} onSubmit={handleSubmit}>
				<InputField
					className={styles.formField}
					label="Title"
					name="title"
					type="text"
					inputOptions={{ maxLength: 20, minLength: 0 }}
					required={true}
					value={formValues.title}
					onChange={handleChange}
				/>
				<div className="center">
					<SketchPicker
						color={formValues.color}
						onChangeComplete={handleColorChange}
					/>
				</div>
				<SubmitButton className={styles.formField} name="Create" />
			</form>
		</div>
	);
};
