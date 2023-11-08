import React from 'react';
import Navbar from '../components/Navbar';
import {Navigate} from 'react-router-dom';

const Mom = ({auth, children}) => {
	if (auth) {
		return (
			<main className='mt-6'>
				<Navbar />
				{children}
			</main>
		);
	} else {
		return <Navigate to='/' />;
	}
};

export default Mom;
