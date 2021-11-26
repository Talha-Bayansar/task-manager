import React from 'react';
import styles from './SubmitButton.module.scss';

interface Props {
	name: string;
	className?: any;
}

export const SubmitButton = ({ name, className }: Props) => {
	return (
		<button className={`${styles.submitButton} ${className}`} type="submit">
			{name.toUpperCase()}
		</button>
	);
};
