import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
NavLink;
function Header() {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="/home"></Link>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto  link">
                {navbars.map((navbar) => (
                  <li key={navbar.to}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#27374d" : "#526D82",
                        borderBottom: isActive ? "solid" : null,
                      })}
                      to={navbar.to}
                    >
                      {navbar.text}
                    </NavLink>
                  </li>
                ))}
              </Nav>
            </Navbar.Collapse>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </Container>
    </>
  );
}
export { Header };
const navbars = [];
navbars.push({
  to: "/",
  text: "Section1",
});
navbars.push({
  to: "/pages",
  text: "Section2",
});

navbars.push({
  to: "/pages1",
  text: "Carrito",
});
navbars.push({
  to: "/pages2",
  text: "Books",
});
navbars.push({
  to: "/pages3",
  text: "Países",
});
