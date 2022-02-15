import { Subject } from '../../subjects';

export interface Task {
	id?: string;
	description: string;
	deadline: string;
	isChecked: boolean;
	subject: Subject;
}
