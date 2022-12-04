import Head from "next/head";
import tw from "tailwind-styled-components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>kimbeomgyu blog</title>
        <meta name="description" content="kimbeomgyu blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>hi!</Main>

      <Footer>Powered by kimbeomgyu</Footer>
    </>
  );
};

export default Home;

const Main = tw.main`
    min-h-screen
    flex flex-1 flex-col
    justify-center	
    items-center	
    py-16
`;

const Footer = tw.footer`
    flex flex-1
    justify-center	
    items-center	
    py-8
    border-t border-neutral-200
`;
