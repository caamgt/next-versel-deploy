import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, CSSProperties } from 'react';

interface Props {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
