import { useRouter } from 'next/dist/client/router';
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

	return <UpdateTaskPage task={data} />;
};

export default UpdateTask;
