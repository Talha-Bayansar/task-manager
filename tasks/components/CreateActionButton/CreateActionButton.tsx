import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styles from './CreateActionButton.module.scss';

export const CreateActionButton = () => {
	const router = useRouter();
	const handleClick = () => {
		router.push('/tasks/create');
	};

	return (
		<div className={styles.createActionButtonContainer}>
			<div className={styles.overlay}></div>
			<button onClick={handleClick} className={styles.createActionButton}>
				Create Task
			</button>
		</div>
	);
};
