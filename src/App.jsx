import {
	BrowserRouter as Router,
	Routes,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import Welcome from './pages/Welcome';
import UrlPage from './pages/UrlPage';
import ScriptPage from './pages/ScriptPage';
import Mom from './tools/Mom';
import ProtectedPage from './pages/ProtectedPage';

const userAuth = JSON.parse(localStorage.getItem('auth'));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route
				index
				element={
					<ProtectedPage auth={userAuth?.isAuth}>
						<Welcome />
					</ProtectedPage>
				}
			/>
			<Route
				path='url'
				element={
					<Mom auth={userAuth?.isAuth}>
						<UrlPage />
					</Mom>
				}
			/>
			<Route
				path='script'
				element={
					<Mom auth={userAuth?.isAuth}>
						<ScriptPage />
					</Mom>
				}
			/>
		</Route>
	)
);

function App() {
	return (
		<div className='w-[36rem] sm:w-[46rem] md:w-[56rem] lg:w-[62rem] xl:w-[76rem] mx-auto'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
