import {Navigate} from 'react-router-dom';

const ProtectedPage = ({children, auth}) => {
	if (auth) {
		return <Navigate to='/url' />;
	}
	return children;
};

export default ProtectedPage;
