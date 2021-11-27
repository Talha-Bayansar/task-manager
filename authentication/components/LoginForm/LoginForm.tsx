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
	const [errorMessage, setErrorMessage] = useState<string>('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = formValues;
		login(email, password).then((res) => {
			if (res.error) {
				setErrorMessage(
					'Email and password combination does not match.'
				);
			} else {
				setErrorMessage('');
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
				name="email"
				label="Email"
				type="email"
				required={true}
			/>
			<InputField
				className={styles.loginFormInputField}
				name="password"
				label="Password"
				type="password"
				required={true}
				inputOptions={{ minLength: '6' }}
			/>
			<SubmitButton
				className={styles.loginFormSubmitButton}
				name="Login"
			/>
			{errorMessage && <p className="error-message">{errorMessage}</p>}
		</form>
	);
};
