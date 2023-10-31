import Button from '../components/Button';

const Welcome = () => {
	return (
		<section className='flex gap-8 items-center justify-center mt-12 md:mt-32 lg:mt-32 xl:mt-32 md:w-[56rem] lg:w-[62rem] xl:w-[76rem] mx-auto'>
			<div className='flex flex-col gap-6 font-mono px-6 sm:w-[46rem] md:w-[36rem] md:px-0 lg:w-[42rem] lg:px-0 xl:w-[46rem] xl:px-0'>
				<p className='text-7xl text-center sm:text-center md:text-left lg:text-left xl:text-left sm:text-8xl md:text-6xl lg:text-5xl xl:text-6xl font-sans font-bold text-yellow-500 mb-16 md:mb-4 lg:mb-4 xl:mb-4'>
					Welcome to YT Scripter!
				</p>
				<p className='text-center md:text-left lg:text-left xl:text-left text-xl text-gray-700'>
					Turn any YouTube URL and unclear scripts into more readable and
					concise plain text.
				</p>
				<article>
					<p className='text-center md:text-left lg:text-left xl:text-left text-xl text-gray-700'>
						URL to readable text ✅
					</p>
					<p className='text-center md:text-left lg:text-left xl:text-left text-xl text-gray-700'>
						Bushy script to readable text ✅
					</p>
				</article>
				<article>
					<p className='text-center md:text-left lg:text-left xl:text-left text-xl text-gray-700'>
						Open source 😃
					</p>
					<p className='text-center md:text-left lg:text-left xl:text-left text-xl text-gray-700'>
						No stupid ads 🚀
					</p>
					<p className='text-center md:text-left lg:text-left xl:text-left text-xl text-gray-700'>
						Free to use 😉
					</p>
				</article>
				<Button text='Try out!' />
			</div>
			<div className='hidden sm:hidden md:block lg:block xl:block w-[26rem] overflow-hidden'>
				<img
					className='w-full h-full object-fill'
					src='https://media-public.canva.com/cuURw/MAE9epcuURw/1/tl.png'
					alt='hero image'
				/>
			</div>
		</section>
	);
};

export default Welcome;
