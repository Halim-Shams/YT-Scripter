import {Navigate} from 'react-router-dom';

const ProtectedPage = ({children, auth}) => {
	if (auth) {
		return <Navigate to='/script' />;
	} else {
		return children;
	}
};

export default ProtectedPage;
