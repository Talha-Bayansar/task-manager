import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { useAuthContext } from '../../';
import { InputField, SubmitButton } from '../../../components';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
	const { login } = useAuthContext();
	const [formValues, setFormValues] = useState({
		email: '',
		password: ''
	});
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = formValues;
		login(email, password).then((res) => {
			if (res.error) {
				console.log('Error');
			} else {
				router.push('/');
			}
		});
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	return (
		<form
			className={styles.loginForm}
			onSubmit={handleSubmit}
			onChange={handleChange}
		>
			<InputField
				className={styles.loginFormInputField}
				htmlFor="email"
				name="email"
				label="Email"
				type="email"
				required={true}
			/>
			<InputField
				className={styles.loginFormInputField}
				htmlFor="password"
				name="password"
				label="Password"
				type="password"
				required={true}
			/>
			<SubmitButton
				className={styles.loginFormSubmitButton}
				name="Login"
			/>
		</form>
	);
};
