import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from '../config/firebase-config';
import {useNavigate} from 'react-router-dom';

const Button = ({text}) => {
	const navigate = useNavigate();
	const onTry = async () => {
		const results = await signInWithPopup(auth, provider);
		const userInfo = {
			userID: results.user.uid,
			userEmail: results.user.email,
			displayName: results.user.displayName,
			photoURL: results.user.photoURL,
			isAuth: true,
		};
		localStorage.setItem('auth', JSON.stringify(userInfo));
		navigate('/url');
	};
	return (
		<button
			onClick={onTry}
			className='self-center text-2xl px-10 bg-yellow-500/20 hover:bg-yellow-500/30 transition-colors border-2 rounded-lg border-yellow-500 md:px-6 lg:px-6 xl:px-6 py-2 mt-8 md:text-xl lg:text-xl xl:text-xl font-bold text-gray-700 md:self-start lg:self-start xl:self-start'>
			{text}
		</button>
	);
};

export default Button;
