import { Link } from "react-router-dom";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

export default function Nav() {
  return (
    <>
    <Navbar bg="danger" variant="light">
        <Container className="justify-content-betwenn">
            <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">
            Home 🏠
            </Link>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            Contacto 📒
            </Link>
            </div>
            <NavbarBrand className="text-white ms-3">Happy Cake🎂</NavbarBrand>
        </Container>
    </Navbar>
    </>
  );
};
