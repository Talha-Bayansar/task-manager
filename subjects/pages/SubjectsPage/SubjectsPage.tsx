import React from 'react';
import { useQuery } from 'react-query';
import { SubjectCard, useSubjectsContext } from '../..';
import { CreateActionButton } from '../../../components';
import styles from './SubjectsPage.module.scss';

export const SubjectsPage = () => {
	const { getSubjects } = useSubjectsContext();

	const { data, isLoading, error } = useQuery('subjects', getSubjects);

	if (isLoading) return <span>Loading...</span>;
	if (error || data['error']) return <span>Error</span>;

	return (
		<div className={styles.taskPage}>
			<div className={styles.list}>
				{data.map((subject, index) => (
					<SubjectCard
						className={styles.listItem}
						key={index}
						subject={subject}
					/>
				))}
			</div>
			<div className={styles.spacing} />
			<CreateActionButton title="Create Subject" url="/subjects/create" />
		</div>
	);
};
