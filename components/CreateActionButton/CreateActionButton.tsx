import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styles from './CreateActionButton.module.scss';

interface Props {
	url: string;
	title: string;
}

export const CreateActionButton = ({ url, title }: Props) => {
	const router = useRouter();
	const handleClick = () => {
		router.push(url);
	};

	return (
		<div className={styles.createActionButtonContainer}>
			<div className={styles.overlay}></div>
			<button onClick={handleClick} className={styles.createActionButton}>
				{title}
			</button>
		</div>
	);
};
