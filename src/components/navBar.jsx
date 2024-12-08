import styles from './nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
  return (
    <nav className={styles['nav-bar']}>
      <header>
        Beautify
      </header>
      <aside>
        <button>Get Started</button>
      </aside>
    </nav>
  );
}

export default Navbar;
