import '../styles/globals.scss';
import { Layout } from '../components';
import { HttpProvider } from '../http';
import { TasksProvider } from '../tasks';
import { AuthProvider } from '../authentication';

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<HttpProvider>
				<TasksProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</TasksProvider>
			</HttpProvider>
		</AuthProvider>
	);
}

export default MyApp;
