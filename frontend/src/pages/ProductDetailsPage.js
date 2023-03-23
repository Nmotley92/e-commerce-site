import {
    Row,
    Col,
    Container,
    Image,
    ListGroup,
    Form,
    Button,
    Alert,
} from "react-bootstrap";
import Rating from 'react-rating';
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";

const ProductDetailsPage = () => {
    return (
        <Container>
            <AddedToCartMessageComponent />
            <Row className="mt-5">
                <Col md={4}>
                    <Image fluid src="/images/games-category.png" />
                    <Image fluid src="/images/monitors-category.png" />
                    <Image fluid src="/images/tablets-category.png" />
                    <Image fluid src="/images/games-category.png" />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h1>Product name</h1>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating
                                        className="custom-rating"
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        fractions={1}
                                        initialRating={5}
                                    />{' '}
                                    (1)
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price <span className="fw-bold">$345</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Porta ac consectetur ac Lorem ipsum dolor, sit amet
                                    consectetur adipisicing elit. Perferendis, illo.
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>Status: in stock</ListGroup.Item>
                                <ListGroup.Item>
                                    Price: <span className="fw-bold">$345</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Quantity:
                                    <Form.Select size="lg" aria-label="Default select example">
                                        <option>1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant="danger">Add to cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h5>REVIEWS</h5>
                            <ListGroup variant="flush">
                                {Array.from({ length: 10 }).map((item, idx) => (
                                    <ListGroup.Item key={idx}>
                                        John Doe <br />
                                        <Rating
                                            className="custom-rating"
                                            readonly
                                            emptySymbol="far fa-star"
                                            fullSymbol="fas fa-star"
                                            fractions={1}
                                            initialRating={5}
                                        />{' '}
                                        (1)
                                        <br />
                                        20-09-2001 <br />
                                        Porta ac consectetur ac Lorem ipsum dolor, sit amet
                                        consectetur adipisicing elit. Perferendis, illo.
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    <Alert variant="danger">Login first to write a review</Alert>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Label>Write a review</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example">
                            <option>Your rating</option>
                            <option value="5">5 (very good)</option>
                            <option value="4">4 (good)</option>
                            <option value="3">3 (average)</option>
                            <option value="2">2 (bad)</option>
                            <option value="1">1 (awful)</option>
                        </Form.Select>
                        <Button className="mb-3 mt-3" variant="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailsPage;


