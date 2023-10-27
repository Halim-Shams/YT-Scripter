import React from 'react';
import {NavLink} from 'react-router-dom';

const NavbarLink = ({text, path}) => {
	return (
		<NavLink
			to={path}
			className={({isActive}) =>
				isActive
					? 'px-2.5 py-0.5 bg-gray-200 text-xl text-gray-600 rounded-md'
					: 'px-2.5 py-0.5 hover:bg-gray-200 transition-colors text-xl text-gray-600 rounded-md'
			}>
			{text}
		</NavLink>
	);
};

export default NavbarLink;
