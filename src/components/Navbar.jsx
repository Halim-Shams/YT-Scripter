import React from 'react';
import NavbarLink from './NavbarLink';
import {Link, json} from 'react-router-dom';

const Navbar = () => {
	const {photoURL, displayName} = JSON.parse(localStorage.getItem('auth'));
	const fullName = displayName.split(' ');
	const username = fullName[0].toLowerCase();

	return (
		<nav className='bg-gray-50 rounded-lg drop-shadow-lg hover:drop-shadow-none hover:bg-white transition-all px-8 py-2 flex items-center justify-between'>
			<Link to='/' className='text-2xl text-yellow-500 font-bold font-mono'>
				YT Scripter
			</Link>
			<div className='flex items-center gap-12'>
				<div className='flex gap-1.5 items-center font-mono'>
					<NavbarLink text='URL' path={'/url'} />
					<NavbarLink text='Script' path={'/script'} />
				</div>
				<div className='flex items-center gap-2'>
					<p className='text-xl text-gray-400 font-light font-mono'>
						@{username}
					</p>
					<div className='rounded-full bg-gray-300 w-11 h-11 overflow-hidden'>
						<img
							src={photoURL}
							className='w-full h-full object-cover'
							alt='profile'
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
