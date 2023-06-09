import CarouselComponent from "../../components/CarouselComponent";
import Categories from "../../components/Categories";
import { Row, Container } from "react-bootstrap";
import HomeIntro from "../../components/HomeIntro";
import { useEffect, useState } from "react";

import MetaComponent from "../../components/MetaComponent";

const HomePageComponent = ({ categories }) => {
    const [mainCategories, setMainCategories] = useState([]);
    useEffect(() => {
        setMainCategories(categories);
    }, [categories])
  
  return (
    <>
    <MetaComponent/>
      <CarouselComponent />
      <HomeIntro />
      <Container className="category-container">
        <Row xs={1} md={2} className="g-4 mt-5">
          {mainCategories.map((category, idx) => (
            idx < 6 ? <Categories key={idx} category={category} idx={idx} /> : null
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePageComponent
