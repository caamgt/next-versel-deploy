import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../components/layouts/MainLayout';
import DarkLayout from '../components/layouts/DarkLayout';

const AboutPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <h1 className='title'>
        Ir a <Link href='/'>Home</Link>
      </h1>
      <h2>{asPath}</h2>
      <p className='description'>
        Get started by editing <code className='code'>pages{asPath}.js</code>
      </p>
    </>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
