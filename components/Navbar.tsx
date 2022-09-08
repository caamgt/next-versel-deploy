import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Pricing', href: '/pricing' },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {!menuItems ? (
        <div>No hay opciones en el menú</div>
      ) : (
        menuItems.map((item, idx) => (
          <ActiveLink key={idx} href={item.href} text={item.text} />
        ))
      )}
    </nav>
  );
};

export default Navbar;
