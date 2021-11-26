import React from 'react';
import { LoginForm } from '../../components';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
	return (
		<div className={styles.loginPage}>
			<h1 className={styles.heading}>Welcome to Task Manager!</h1>
			<p className={styles.subheading}>
				Please login with your task manager account.
			</p>
			<LoginForm />
		</div>
	);
};
