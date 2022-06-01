import { Navbar, Container } from "react-bootstrap";


function Header(props) {
    return(
        <Navbar bg="dark">
            <Container className="navBar">
            <Navbar.Brand href="/" color="inherit">React & Material-UI Sample Application</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
