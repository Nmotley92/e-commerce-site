import CarouselComponent from "../../components/CarouselComponent";
import Categories from "../../components/Categories";
import { Row, Container } from "react-bootstrap";
import HomeIntro from "../../components/HomeIntro";
import { useEffect, useState } from "react";

const HomePageComponent = ({ categories }) => {
    const [mainCategories, setMainCategories] = useState([]);
    useEffect(() => {
        setMainCategories(categories);
    }, [categories])
  
  return (
    <>
      <CarouselComponent />
      <HomeIntro />
      <Container className="category-container">
        <Row xs={1} md={2} className="g-4 mt-5">
          {mainCategories.map((category, idx) => (
            <Categories key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePageComponent
