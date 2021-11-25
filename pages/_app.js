import '../styles/globals.scss';
import { Layout } from '../components';
import { AuthProvider } from '../auth';
import { HttpProvider } from '../http';
import { TasksProvider } from '../tasks';

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
