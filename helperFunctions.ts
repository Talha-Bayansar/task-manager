export const parseToInputDate = (date: Date) => {
	return `${date.getFullYear()}-${(date.getMonth() + 1).toLocaleString(
		'en-US',
		{
			minimumIntegerDigits: 2,
			useGrouping: false
		}
	)}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}`;
};
