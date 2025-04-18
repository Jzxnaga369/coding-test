import NavbarComponent from './components/NavbarComponent'

export default function Layout({ children }) {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
    </>
  );
}
