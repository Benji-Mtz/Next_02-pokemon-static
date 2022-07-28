import Head from 'next/head';

interface Props {
    children: React.ReactNode;
    title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name='author' content='Benji Martinez'/>
            <meta name='description' content={`Información sobre el pokémon ${ title }`}/>
            <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
        </Head>

        {/* Navbar */}

        <main>
            { children }
        </main>
    </>
  )
}
