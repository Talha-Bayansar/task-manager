import React, { createContext, useContext, useState } from 'react';

const TasksContext = createContext({});

export const TasksProvider = ({ children }) => {
	const [test, setTest] = useState(true);

	const api = {
		test,
		setTest
	};

	return (
		<TasksContext.Provider value={api}>{children}</TasksContext.Provider>
	);
};

export const useTasksContext = () => useContext(TasksContext);
