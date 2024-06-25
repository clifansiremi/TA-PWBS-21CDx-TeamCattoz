// ButtonLink.tsx

import Link from 'next/link';
import styles from './buttonLink.module.css';

interface ButtonLinkProps {
  href: string;
  text: string;
}

const buttonLink: React.FC<ButtonLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default buttonLink;
