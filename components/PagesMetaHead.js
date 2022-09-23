import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/images/logo.png" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Jared Mancuso',
	keywords: 'videography, photography, video, photo, videographer, photographer, local, salem nh',
	description: `Jared Mancuso is a professional videographer and photographer.`
};

export default PagesMetaHead;
