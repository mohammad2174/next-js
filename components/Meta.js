import Head from "next/head";


const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta charSet="utf-8" />
            <meta name="author" content="Mohammad Reza" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="3 days" />
            <meta name="language" content="english" />
            <meta name="rating" content="general" />
            <meta name="describtion" content="global" />
            <meta name="expires" content="never" />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'News',
    describtion: 'Programming',
    keywords: 'Programming'
}


export default Meta;
