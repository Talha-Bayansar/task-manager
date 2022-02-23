import React, { createContext, useContext } from 'react';
import { Subject, SubjectDto } from '..';
import { useHttpContext } from '../../http';

interface ISubjectsContext {
	getSubjects: () => Promise<Subject[]>;
	getSubject: (id: string | string[]) => Promise<Subject>;
	editSubject: (id: string, subjectDto: SubjectDto) => Promise<Subject>;
}

const SubjectsContext = createContext<ISubjectsContext | null>(null);

export const SubjectsProvider = ({ children }) => {
	const subjectsUrl = `${process.env.NEXT_PUBLIC_API_URL}/subjects`;
	const { get, put } = useHttpContext();

	const getSubjects = async () => {
		const data = await get<Subject[]>(subjectsUrl);
		return data;
	};

	const getSubject = async (id: string | string[]) => {
		const data = await get<Subject>(`${subjectsUrl}/${id}`);
		return data;
	};

	const editSubject = async (id: string, subjectDto: SubjectDto) => {
		const data = await put<Subject>(`${subjectsUrl}/${id}`, subjectDto);
		return data;
	};

	const api = { getSubjects, getSubject, editSubject };

	return (
		<SubjectsContext.Provider value={api}>
			{children}
		</SubjectsContext.Provider>
	);
};

export const useSubjectsContext = () => useContext(SubjectsContext);
