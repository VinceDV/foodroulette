import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../media/pics/logo.jpg";
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary sticky-top"
      id="naviga"
    >
      <Container className="wrapper-text">
        <Nav.Link href="/home">
          <img
            className="me-5"
            src={logo}
            style={{ width: "3em", height: "3em" }}
            alt=""
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="linkNav me-3" href="/home">
              Home
            </Nav.Link>
              <Nav.Link className="linkNav" href="/create-recipe">
              Create
            </Nav.Link>
            
          </Nav>
          <Nav>
            {localStorage.getItem("token") ? (
              <>
                <Nav.Link style={{ textDecoration: "none", cursor: "auto" }}>
                  Welcome, {localStorage.getItem("username")}
                </Nav.Link>
                <a href="/home">
                <button
                  className="linkNav"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
                </a>
              </>
            ) : (
              <>
                <Nav.Link className="linkNav me-3" href="/login-page">
                  Login
                </Nav.Link>
                <Nav.Link className="linkNav" href="/register-page">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
