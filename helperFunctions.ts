export const parseToInputDate = (date: Date): string => {
	return `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString(
		'en-US',
		{
			minimumIntegerDigits: 2,
			useGrouping: false
		}
	)}-${date.getDate().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}T${date.getHours().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}:${date.getMinutes().toLocaleString('en-US', {
		minimumIntegerDigits: 2,
		useGrouping: false
	})}`;
};
