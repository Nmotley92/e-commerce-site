import {Carousel} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const CarouselComponent = () => {
    const cursorP = {
        cursor: 'pointer'
    }
    return (
    <Carousel>
      <Carousel.Item>
        <img crossOrigin='anonymous'
          className="d-block w-100"
          style={{height: '300px', objectFit: 'cover'}}
          src="/images/books-1.avif"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3 className="carousel-caption">A better way to discover books and support authors</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: '300px', objectFit: 'cover'}}
          src="/images/books-2.avif"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
            <h3 className="carousel-caption">Expand your knowledge by reading books</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: '300px', objectFit: 'cover'}}
          src="/images/books-3.avif"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
            <h3 className="carousel-caption">Find your next book</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default CarouselComponent