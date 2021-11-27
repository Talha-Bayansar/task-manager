import '../styles/globals.scss';
import { Layout } from '../components';
import { HttpProvider } from '../http';
import { TasksProvider } from '../tasks';
import { AuthProvider } from '../authentication';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MenuProvider } from '../menu';
import { SubjectsProvider } from '../subjects';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<HttpProvider>
				<QueryClientProvider client={queryClient}>
					<SubjectsProvider>
						<TasksProvider>
							<MenuProvider>
								<Layout>
									<Component {...pageProps} />
								</Layout>
							</MenuProvider>
						</TasksProvider>
					</SubjectsProvider>
				</QueryClientProvider>
			</HttpProvider>
		</AuthProvider>
	);
}

export default MyApp;
