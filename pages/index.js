import React from 'react';
import Head from 'next/head';

import Header from '../components/navigation/header/Header';
import Footer from '../components/navigation/footer/Footer';
import Homepage from '../components/homepage/Homepage';

import content from '../data/content';

export default function Home() {
  return (
    <>
      <Head>
          <>
              <title>{content.artist}</title>
              <meta property="title" content={content.artist + " Art"} key="title"/>
              <meta property="description" content={"Buy " + content.artist + "'s art. Explore her collections."} key="description"/>
              <meta name="description" content={"Buy " + content.artist + "'s art. Explore her collections."} key="description"/>
          </>
      </Head>
      <Header></Header>

      <Homepage></Homepage>

      <Footer></Footer>
    </>
  )
}
