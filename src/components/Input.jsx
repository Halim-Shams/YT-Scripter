import React from 'react';

const Input = () => {
	return (
		<form className='w-[38rem] mx-auto'>
			<input
				type='url'
				placeholder='Enter the URL...'
				className='rounded-lg focus:border-yellow-400 hover:shadow-md focus:shadow-xl transition-all text-gray-600 outline-none border py-2 px-4 text-xl font-mono w-full'
			/>
		</form>
	);
};

export default Input;
