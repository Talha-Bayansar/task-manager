import React from 'react';
import Head from 'next/head';
import { LoginPage } from '../authentication';

const Login = () => {
	return (
		<div>
			<Head>
				<title>Login</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LoginPage />
		</div>
	);
};

export default Login;
