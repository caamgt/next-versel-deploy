import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Primer sitio con Next | Carlos A.</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
