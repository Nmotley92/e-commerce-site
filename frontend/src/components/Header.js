import { Navbar, Nav, NavDropdown, Container, Badge, Form, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand href="/">Shop Name</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                        <DropdownButton id="dropdown-basic-button" title="All">
                            <Dropdown.Item>Electronics</Dropdown.Item>
                            <Dropdown.Item>Books</Dropdown.Item>
                            <Dropdown.Item>Cars</Dropdown.Item>

                        </DropdownButton>
                        <Form.Control type="text" placeholder="Search in shop.." />
                        <Button variant="warning"><i className="bi bi-search text-dark"></i></Button>
                        </InputGroup>
                        </Nav>
                    <Nav>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">
                            <Badge bg="danger">
                                2
                            </Badge>
                            Cart</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;