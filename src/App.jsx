import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import UrlPage from './pages/UrlPage';
import ScriptPage from './pages/ScriptPage';
import Mom from './tools/Mom';

function App() {
	return (
		<div className='w-[76rem] mx-auto'>
			<Router>
				<Routes>
					<Route index path='/' element={<Welcome />} />
					<Route path='/generate' element={<Mom />}>
						<Route path='url' element={<UrlPage />} />
						<Route path='script' element={<ScriptPage />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
