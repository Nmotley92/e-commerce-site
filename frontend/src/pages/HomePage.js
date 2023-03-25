import CarouselComponent from "../components/CarouselComponent";
import Categories from "../components/Categories";
import { Row, Container } from "react-bootstrap";
import HomeIntro from "../components/HomeIntro";
const HomePage = () => {
  const categories = [
    "Romance",
    "Fantasy",
    "Horror",
    "Young Adult",
  ];
  return (
    <>
      <CarouselComponent />
      <HomeIntro />
      <Container className="category-container">
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, idx) => (
            <Categories key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;