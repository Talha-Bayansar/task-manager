import '../styles/globals.scss';
import { Layout } from '../components';
import { HttpProvider } from '../http';
import { TasksProvider } from '../tasks';
import { AuthProvider } from '../authentication';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<HttpProvider>
				<QueryClientProvider client={queryClient}>
					<TasksProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</TasksProvider>
				</QueryClientProvider>
			</HttpProvider>
		</AuthProvider>
	);
}

export default MyApp;
