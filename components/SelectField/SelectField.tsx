import React, { useEffect } from 'react';
import { Subject } from '../../subjects';
import styles from './SelectField.module.scss';

interface Props {
	className?: any;
	name: string;
	subjects: Subject[];
	setFormValues?: (e: any) => void;
	formValues?: any;
}

export const SelectField = ({
	className,
	name,
	subjects,
	setFormValues,
	formValues
}: Props) => {
	useEffect(() => {
		if (subjects) {
			setFormValues({ ...formValues, subject: subjects[0].id });
		}
	}, [subjects]);

	return (
		<div className={`${styles.selectField} ${className}`}>
			<label htmlFor={name}>Subject</label>
			<select name={name} id={name}>
				{subjects?.map((subject) => (
					<option key={subject.id} value={subject.id}>
						{subject.title}
					</option>
				))}
			</select>
		</div>
	);
};
