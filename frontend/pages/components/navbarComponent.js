import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarComponent() {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <span className="navbar-brand">
        <Link href="/">
          <span>Juan<br />Sanjaya</span>
        </Link>
      </span>
      <nav className="navbar-nav">
        <ul className="navbar-menu">
          <li className={`navbar-menu-item ${pathname === '/' ? 'navbar-menu-item-active' : ''}`}>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li className={`navbar-menu-item ${pathname == '/about' ? 'navbar-menu-item-active' : ''}`}>
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li className={`navbar-menu-item ${pathname === '/project' ? 'navbar-menu-item-active' : ''}`}>
            <Link href="/project">
              <span>Project</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button className="navbar-button">InterOpera</button>
    </div>
  );
}