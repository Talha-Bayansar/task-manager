import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import { UpdateTaskPage, useTasksContext } from '../../../tasks';

const UpdateTask = () => {
	const router = useRouter();
	const { id } = router.query;
	const { getTask } = useTasksContext();
	const { data, isLoading, error } = useQuery('task', () => getTask(id), {
		cacheTime: 0
	});

	if (isLoading) return <span>Aan het laden...</span>;
	if (error || data['error']) return <span>Error</span>;

	return (
		<div>
			<Head>
				<title>Edit task</title>
			</Head>
			<UpdateTaskPage task={data} />
		</div>
	);
};

export default UpdateTask;
