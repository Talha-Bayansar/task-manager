import React from 'react';
import { Tab } from '../..';
import { Chip } from '../../../components';
import styles from './Tabs.module.scss';

interface Props {
	className?: any;
	tabs: Tab[];
	onClick: (e: any) => void;
}

export const Tabs = ({ className, tabs, onClick }: Props) => {
	return (
		<div className={`${styles.tabs} ${className}`}>
			{tabs.map((tab) => (
				<Chip
					key={tab.name}
					name={tab.name}
					active={tab.active}
					onClick={onClick}
				/>
			))}
		</div>
	);
};
