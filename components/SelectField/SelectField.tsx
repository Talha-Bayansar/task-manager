import React from 'react';
import styles from './SelectField.module.scss';

interface Props {
	className?: any;
	data: any[];
	label: string;
	name: string;
	required?: boolean;
	value?: any;
	onChange?: (e: any) => any;
}

export const SelectField = ({
	className,
	data,
	label,
	name,
	required = false,
	value,
	onChange
}: Props) => {
	return (
		<div className={`${styles.selectField} ${className}`}>
			<label htmlFor={name}>{label}</label>
			<select
				name={name}
				required={required}
				value={value}
				onChange={onChange}
			>
				<option value="">Geen</option>
				{data.map((item) => (
					<option key={item.id} value={item.id}>
						{item.title}
					</option>
				))}
			</select>
		</div>
	);
};
