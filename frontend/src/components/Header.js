import { Navbar, Nav, NavDropdown, Container, Badge, Form, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Shop Name</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                            <DropdownButton id="dropdown-basic-button" title="All">
                                <Dropdown.Item>Electronics</Dropdown.Item>
                                <Dropdown.Item>Books</Dropdown.Item>
                                <Dropdown.Item>Cameras</Dropdown.Item>

                            </DropdownButton>
                            <Form.Control type="text" placeholder="Search in shop.." />
                            <Button className="search-btn btn btn-outline-secondary"><i className="bi bi-search text-light"></i></Button>
                        </InputGroup>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/admin/orders">
                            <Nav.Link>
                                Admin
                                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>

                            </Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                            <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/user/my-orders">My orders</NavDropdown.Item>
                            <NavDropdown.Item eventKey="/user" as={Link} to="/user">My Profile</NavDropdown.Item>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                Login
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Nav.Link>
                                Register
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>
                            <Badge bg="danger">
                                2
                            </Badge>
                            <i className="bi bi-cart-dash"></i>
                            <span className="ms-1">Cart</span>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;