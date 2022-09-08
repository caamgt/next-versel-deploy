import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../../components/layouts/MainLayout';

const PricingPage = () => {
  const { asPath } = useRouter();
  return (
    <MainLayout>
      <h1 className='title'>
        Ir a <Link href='/'>Home</Link>
      </h1>
      <h2>{asPath}</h2>
      <p className='description'>
        Get started by editing <code className='code'>pages{asPath}.js</code>
      </p>
    </MainLayout>
  );
};

export default PricingPage;
