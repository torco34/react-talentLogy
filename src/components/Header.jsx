import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { BsGithub } from "react-icons/bs";

NavLink;
function Header() {
  return (
    <>
      <Container>
        <Navbar bg="light" expand="lg">
          <Container>
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
            <Link to="https://github.com/torco34/react-talentLogy">
              <span>
                <BsGithub />
              </span>
            </Link>
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
  to: "react-talentLogy/index",
  text: "Carrito",
});
navbars.push({
  to: "/pages2",
  text: "Books",
});
navbars.push({
  to: "/pages4",
  text: "Películas",
});
navbars.push({
  to: "/pages5",
  text: "section2",
});
navbars.push({
  to: "/pages",
  text: "Section3",
});
navbars.push({
  to: "/pages3",
  text: "Section4",
});

navbars.push({
  to: "/index",
  text: "Básicos",
});
