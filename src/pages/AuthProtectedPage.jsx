import {Navigate} from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthProtectedPage = ({children, auth}) => {
	if (auth) {
		return (
			<main className='mt-6'>
				<Navbar />
				{children}
			</main>
		);
	}
	return <Navigate to={'/'} />;
};

export default AuthProtectedPage;
