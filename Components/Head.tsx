import Head from 'next/head';

type HeadProps = {
    title: string;
    description?: string;
    keywords?: string;
};

export default function CustomHead({ title, description, keywords }: HeadProps) {
    return (
        <Head>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
