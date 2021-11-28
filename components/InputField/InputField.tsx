import React from 'react';
import styles from './InputField.module.scss';

interface Props {
	label: string;
	name: string;
	type: string;
	required?: boolean;
	inputOptions?: any;
	className?: any;
	value?: any;
}

export const InputField = ({
	label,
	name,
	type,
	required = false,
	inputOptions,
	className,
	value
}: Props) => {
	return (
		<div className={`${styles.inputField} ${className}`}>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				required={required}
				{...inputOptions}
				defaultValue={value}
			/>
		</div>
	);
};
