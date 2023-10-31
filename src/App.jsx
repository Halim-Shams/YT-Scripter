import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import UrlPage from './pages/UrlPage';
import ScriptPage from './pages/ScriptPage';
import Mom from './tools/Mom';
import ProtectedPage from './pages/ProtectedPage';
import AuthProtectedPage from './pages/AuthProtectedPage';

function App() {
	const userAuth = JSON.parse(localStorage.getItem('auth'));
	return (
		<div className='w-[36rem] sm:w-[46rem] md:w-[56rem] lg:w-[62rem] xl:w-[76rem] mx-auto'>
			<Router>
				<Routes>
					<Route
						index
						path='/'
						element={
							<ProtectedPage auth={userAuth?.isAuth}>
								<Welcome />
							</ProtectedPage>
						}
					/>
					<Route
						path='/url'
						element={
							<AuthProtectedPage auth={userAuth?.isAuth}>
								<UrlPage />
							</AuthProtectedPage>
						}
					/>
					<Route
						path='/script'
						element={
							<AuthProtectedPage auth={userAuth?.isAuth}>
								<ScriptPage />
							</AuthProtectedPage>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
