import React, { useState } from 'react';
import { Subject, useSubjectsContext } from '../..';
import { InputField, SubmitButton } from '../../../components';
import styles from './EditSubjectsPage.module.scss';
import { SketchPicker } from 'react-color';
import { useRouter } from 'next/dist/client/router';

interface Props {
	subject: Subject;
}

export const EditSubjectsPage = ({ subject }: Props) => {
	const router = useRouter();
	const { editSubject } = useSubjectsContext();
	const [formValues, setFormValues] = useState({
		color: subject.color,
		title: subject.title
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		await editSubject(subject.id, formValues);
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
				<SubmitButton className={styles.formField} name="Update" />
			</form>
		</div>
	);
};
