import React from 'react';
import { Task, useTasksContext } from '../..';
import styles from './TaskCard.module.scss';
import { MdModeEdit } from 'react-icons/md';
import { Chip } from '../../../components';
import { useRouter } from 'next/dist/client/router';

interface Props {
	task: Task;
	className?: any;
	refetch?: () => any;
}

export const TaskCard = ({ task, className, refetch }: Props) => {
	const router = useRouter();
	const { putTask } = useTasksContext();
	const getDeadlineDate = () => {
		return new Date(task.deadline).toLocaleDateString('default', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});
	};

	const getDeadlineTime = () => {
		return new Date(task.deadline).toLocaleTimeString('default', {
			hour: '2-digit',
			minute: '2-digit'
		});
	};

	const handleEditClick = () => {
		router.push(`/tasks/${task.id}/update`);
	};

	const handleCheck = async () => {
		await putTask(task.id, {
			...task,
			isChecked: !task.isChecked,
			subject: task.subject.id
		});
		refetch();
	};

	return (
		<div
			style={{ backgroundColor: task.subject?.color }}
			className={`${styles.taskCard} ${className}`}
		>
			<div className={styles.taskCardDetails}>
				<Chip size="sm" name={task.subject?.title} />
				<p className={styles.taskCardHeading}>{task.description}</p>
				<div className={styles.taskCardDeadline}>
					<p>{getDeadlineDate()}</p>
					<p>{getDeadlineTime()}</p>
				</div>
			</div>
			<div className={styles.taskCardActions}>
				<button
					onClick={handleEditClick}
					className={styles.taskCardEditButton}
				>
					<MdModeEdit color="white" />
				</button>
				<button
					className={`${styles.taskCardCheckButton} ${
						task.isChecked && styles.checked
					}`}
					onClick={handleCheck}
				></button>
			</div>
		</div>
	);
};
