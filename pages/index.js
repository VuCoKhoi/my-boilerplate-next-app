import React from 'react';
import Head from 'next/head';
import useBlockIframe from '../customUse/useBlockIframe';

const Home = () => {
  useBlockIframe();
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div>boilerplate - power by khoivc</div>
    </div>
  );
};

export default Home;
