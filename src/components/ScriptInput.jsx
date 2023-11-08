import React, {useRef, useState} from 'react';
import GeneratedScript from './GeneratedScript';

const ScriptInput = () => {
	const [text, setText] = useState('');
	const [inputArea, setInputArea] = useState(true);
	const scriptRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const script = scriptRef.current.value;
		const lines = script.split('\n');
		const plainScript = lines.join(' ');
		setText(plainScript);
		setInputArea(false);
	};
	return (
		<div className='w-[38rem] mx-auto'>
			{inputArea ? (
				<form onSubmit={onSubmit} className='w-full flex flex-col gap-6'>
					<textarea
						autoFocus={true}
						ref={scriptRef}
						className='border px-6 pt-4 outline-none text-gray-600 font-mono w-full rounded-lg focus:border-yellow-400 hover:shadow-md focus:shadow-xl transition-all'
						rows='20'
						placeholder='Paste the script here...'></textarea>
					<button
						type='submit'
						className='text-lg hover:bg-yellow-500/10 transition-colors border-2 rounded-lg border-yellow-500/60 hover:border-yellow-500/80 font-semibold font-mono text-gray-600 px-4 py-1'>
						Generate ➡️
					</button>
				</form>
			) : (
				<GeneratedScript script={text} />
			)}
		</div>
	);
};

export default ScriptInput;
