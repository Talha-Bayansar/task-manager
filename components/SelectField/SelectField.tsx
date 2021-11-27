import React from 'react';
import styles from './SelectField.module.scss';

interface SelectOption {
	value: string;
	name: string;
}

interface Props {
	className?: any;
	name: string;
	options: SelectOption[];
}

export const SelectField = ({ className, name, options }: Props) => {
	return (
		<div className={`${styles.selectField} ${className}`}>
			<label htmlFor={name}>Subject</label>
			<select name={name} id={name}>
				{options.map((option) => (
					<option key={option.name} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};
