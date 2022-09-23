function AppFooterCopyright() {
	return (
		<div className="flex items-center justify-center text-center font-general-regular">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/realstoman/nextjs-tailwindcss-portfolio"
					target="__blank"
					className="ml-1 duration-500 hover:underline hover:text-[#264a5a] dark:hover:text-white"
				>
					Up The Way Productions
				</a>
				.{' '}
				<a
					href="mailto:jared@asrpromedia.com"
					target="__blank"
					className="ml-1 font-medium uppercase duration-500 text-secondary-dark dark:text-secondary-light hover:underline hover:text-[#264a5a] dark:hover:text-white"
				>
					Jared Mancuso
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
