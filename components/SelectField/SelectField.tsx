import React from 'react';
import { Subject } from '../../subjects';
import styles from './SelectField.module.scss';

interface Props {
	className?: any;
	name: string;
	subjects: Subject[];
	value?: any;
}

export const SelectField = ({ className, name, subjects, value }: Props) => {
	return (
		<div className={`${styles.selectField} ${className}`}>
			<label htmlFor={name}>Subject</label>
			<select defaultValue={value} name={name} id={name}>
				{subjects?.map((subject) => (
					<option key={subject.id} value={subject.id}>
						{subject.title}
					</option>
				))}
			</select>
		</div>
	);
};
