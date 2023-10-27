import React from 'react';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

const Mom = () => {
	return (
		<main className='mt-6'>
			<Navbar />
			<Outlet />
		</main>
	);
};

export default Mom;
