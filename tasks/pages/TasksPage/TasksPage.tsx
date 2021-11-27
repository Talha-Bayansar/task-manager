import React, { useState } from 'react';
import { CreateActionButton, Tabs, TaskList, useTasksContext } from '../..';
import styles from './TaskPage.module.scss';

export interface Tab {
	name: string;
	active: boolean;
	fetchFunction: () => any;
}

export const TasksPage = () => {
	const { getTasks, getTasksToday, getTasksDone } = useTasksContext();

	const tabsTemplate: Tab[] = [
		{
			name: 'Today',
			active: false,
			fetchFunction: getTasksToday
		},
		{
			name: 'Upcoming',
			active: false,
			fetchFunction: getTasks
		},
		{
			name: 'Task Done',
			active: false,
			fetchFunction: getTasksDone
		}
	];

	const findTab = (name: string) => {
		return tabsTemplate.find((tab) => tab.name === name);
	};

	const getActiveTab = () => {
		return tabs.find((tab) => tab.active);
	};

	const [tabs, setTabs] = useState<Tab[]>(
		tabsTemplate.map((tab) => {
			const activeTab = {
				name: 'Today',
				active: true,
				fetchFunction: findTab('Today').fetchFunction
			};
			if (tab.name === activeTab.name) {
				return activeTab;
			}
			return tab;
		})
	);

	const handleTabClick = (e) => {
		const name = e.target.id;

		setTabs(
			tabsTemplate.map((tab) => {
				if (tab.name === name) {
					return {
						name: name,
						active: true,
						fetchFunction: findTab(name).fetchFunction
					};
				}
				return tab;
			})
		);
	};

	return (
		<div className={styles.taskPage}>
			<Tabs
				className={styles.taskPageTabs}
				tabs={tabs}
				onClick={handleTabClick}
			/>
			<TaskList tab={getActiveTab()} />
			<div className={styles.spacing} />
			<CreateActionButton />
		</div>
	);
};
