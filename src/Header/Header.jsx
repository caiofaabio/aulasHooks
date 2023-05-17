import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const adicionalClasse = "flexP";
  return (
    <Navbar
      className={`${styles.container} ${adicionalClasse}`}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Link to="/">
          <Navbar.Brand className={styles.title}>React Hooks</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          className={styles.teste}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Link to="/usestate" className={styles.subTitle}>
              useState
            </Link>
            <Link to="/useeffect" className={styles.subTitle}>
              useEffect
            </Link>
            <Link to="/usecontext" className={styles.subTitle}>
              useContext
            </Link>
            <Link to="/usereduce" className={styles.subTitle}>
              useReduce
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
