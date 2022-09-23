import Link from 'next/link';
import {
	FiFacebook,
	FiYoutube,
	FiGithub,
	FiInstagram,
	FiTwitter,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiFacebook />,
		url: 'https://stoman.medium.com',
	},
	{
		id: 2,
		icon: <FiInstagram />,
		url: 'https://instagram.com/realstoman',
	},
	{
		id: 3,
		icon: <FiYoutube />,
		url: 'https://instagram.com/realstoman',
	},
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="flex flex-col items-center justify-center mb-12 font-general-regular sm:mb-28">
					<p className="mb-5 text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-[#366173] dark:hover:text-white cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
}

export default AppFooter;
