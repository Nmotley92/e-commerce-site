import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Categories = ({ category, idx }) => {
    const images = [
        "/images/romance-books.webp",
        "/images/fantasy-books.webp",
        "/images/horror-books.webp",
        "/images/ya-books.webp",
    ];
    return (
        <Card className='card-container'>
            <Card.Img className="card-img" crossOrigin='anonymous' variant="top" src={images[idx]} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <LinkContainer to="/product-list">
                    <Button className="btn-light border border-secondary-subtle">Go to the category</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );

};

export default Categories