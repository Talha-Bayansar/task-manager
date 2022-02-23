import Head from 'next/head';
import React from 'react';
import { SubjectsPage } from '../../subjects';

const Subjects = () => {
	return (
		<div>
			<Head>
				<title>Subjects</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SubjectsPage />
		</div>
	);
};

export default Subjects;
