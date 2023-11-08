import React from 'react';

const GeneratedScript = ({script}) => {
	return (
		<div className='relative border px-4 pt-2 pb-4 outline-none w-full rounded-lg'>
			<p className='absolute right-4 text-lg hover:text-xl active:text-lg select-none transition-all hover:cursor-pointer'>
				📋
			</p>
			<p className='text-gray-600 font-mono pt-7'>{script}</p>
		</div>
	);
};

export default GeneratedScript;
