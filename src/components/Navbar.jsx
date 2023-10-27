import React from 'react';
import NavbarLink from './NavbarLink';

const Navbar = () => {
	return (
		<nav className='bg-gray-50 rounded-lg drop-shadow-lg hover:drop-shadow-none hover:bg-white transition-all px-8 py-2 flex items-center justify-between'>
			<p className='text-2xl text-yellow-500 font-bold font-mono'>
				YT Scripter
			</p>
			<div className='flex items-center gap-12'>
				<div className='flex gap-1.5 items-center font-mono'>
					<NavbarLink text='URL' path={'url'} />
					<NavbarLink text='Script' path={'script'} />
				</div>
				<div className='flex items-center gap-2'>
					<p className='text-xl text-gray-400 font-light font-mono'>@halim</p>
					<div className='rounded-full bg-gray-300 w-11 h-11'>
						{/* <img className='w-full h-full' alt='profile' /> */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
