import React from 'react';
import styles from './InputField.module.scss';

interface Props {
	label: string;
	htmlFor: string;
	name: string;
	type: string;
	required?: boolean;
	inputOptions?: any;
	className?: any;
}

export const InputField = ({
	label,
	htmlFor,
	name,
	type,
	required = false,
	inputOptions,
	className
}: Props) => {
	return (
		<div className={`${styles.inputField} ${className}`}>
			<label htmlFor={htmlFor}>{label}</label>
			<input
				type={type}
				name={name}
				required={required}
				{...inputOptions}
			/>
		</div>
	);
};
