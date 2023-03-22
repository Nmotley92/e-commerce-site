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
          src="/images/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Best seller in Laptops category</h3>
          </LinkContainer>
          
          <p>Dell Inspiron 15</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: '300px', objectFit: 'cover'}}
          src="/images/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
            <h3>Best seller in Books Category</h3>
          </LinkContainer>
          
          <p>Description of top selling book</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: '300px', objectFit: 'cover'}}
          src="/images/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details">
            <h3>Best seller in Cameras category</h3>
          </LinkContainer>
          
          <p>
            Best selling cmaera description.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default CarouselComponent