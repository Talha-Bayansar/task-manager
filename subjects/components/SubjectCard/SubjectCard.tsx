import React from 'react';
import styles from './SubjectCard.module.scss';
import { Subject } from '../..';
import { MdModeEdit } from 'react-icons/md';

interface Props {
	subject: Subject;
	className?: any;
}

export const SubjectCard = ({ subject, className }: Props) => {
	const handleEditClick = (e: any) => {
		console.log(subject);
	};
	return (
		<div
			style={{ backgroundColor: subject.color }}
			className={`${styles.taskCard} ${className}`}
		>
			<div className={styles.taskCardDetails}>
				<h4>{subject.title}</h4>
			</div>
			<div className={styles.taskCardActions}>
				<button
					onClick={handleEditClick}
					className={styles.taskCardEditButton}
				>
					<MdModeEdit color="white" />
				</button>
			</div>
		</div>
	);
};
