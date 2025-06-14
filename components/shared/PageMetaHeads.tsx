import Head from "next/head";


type PageMetaHeadsProps = {
    title?: string,
    keywords?: string,
    description?: string,
};

const defaultMeta: PageMetaHeadsProps = {
    title: "Next.js & TailwindCSS & TypeScript Portfolio Project",
    keywords: "next,js,tailwindcss,typescript,portfolio,project,web, ui",
    description: "Simple Page application with Next.js, TailwindCSS and TypeScript",

}

export default function PageMetaHeads({
    title = defaultMeta.title,
    keywords = defaultMeta.keywords,
    description = defaultMeta.description,
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}