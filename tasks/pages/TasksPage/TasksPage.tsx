import React, { ContextType, useEffect } from 'react';
import { useTasksContext } from '../..';

export const TasksPage = () => {
	const { getTests } = useTasksContext();
	useEffect(() => {
		getTests();
	}, [getTests]);
	return <div>List of tasks</div>;
};
