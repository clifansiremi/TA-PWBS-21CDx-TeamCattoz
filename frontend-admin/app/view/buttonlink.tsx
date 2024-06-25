// ButtonLink.tsx

import Link from 'next/link';
import styles from './ButtonLink.module.css';

interface ButtonLinkProps {
  href: string;
  text: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <button className={styles.button}>{text}</button>
    </Link>
  );
};

export default ButtonLink;
