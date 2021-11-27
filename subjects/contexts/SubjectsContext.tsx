import React, { createContext, useContext } from 'react';
import { Subject } from '..';
import { useHttpContext } from '../../http';

interface ISubjectsContext {
	getSubjects: () => Promise<Subject[]>;
}

const SubjectsContext = createContext<ISubjectsContext | null>(null);

export const SubjectsProvider = ({ children }) => {
	const subjectsUrl = `${process.env.NEXT_PUBLIC_API_URL}/subjects`;
	const { get } = useHttpContext();

	const getSubjects = async () => {
		const data = await get<Subject[]>(subjectsUrl);
		return data;
	};

	const api = { getSubjects };

	return (
		<SubjectsContext.Provider value={api}>
			{children}
		</SubjectsContext.Provider>
	);
};

export const useSubjectsContext = () => useContext(SubjectsContext);
