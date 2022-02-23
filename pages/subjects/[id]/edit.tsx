import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useQuery } from 'react-query';
import { useSubjectsContext } from '../../../subjects';
import { EditSubjectsPage } from '../../../subjects/pages/EditSubjectsPage/EditSubjectsPage';

const EditSubject = () => {
	const router = useRouter();
	const { id } = router.query;
	const { getSubject } = useSubjectsContext();
	const { data, isLoading, error } = useQuery(
		'subject',
		() => getSubject(id),
		{
			cacheTime: 0
		}
	);

	if (isLoading) return <span>Aan het laden...</span>;
	if (error || data['error']) return <span>Error</span>;

	return <EditSubjectsPage subject={data} />;
};

export default EditSubject;
