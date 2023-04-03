import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../../components/PaginationComponent";
import ProductForListComponent from "../../components/ProductForListComponent";
import SortOptionsComponent from "../../components/SortOptionsComponent";
import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../../components/filterQueryResultOptions/AttributesFilterComponent";

import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const ProductListPageComponent = ({ getProducts, categories }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attrsFilter, setAttrsFilter] = useState([]); // collect category attributes from db and show on the webpage
  const [attrsFromFilter, setAttrsFromFilter] = useState([]); // collect user filters for category attributes
  const [showResetFiltersButton, setShowResetFiltersButton] = useState(false);

  const [filters, setFilters] = useState({}); // collect all filters
  const [price, setPrice] = useState(60);
  const [ratingsFromFilter, setRatingsFromFilter] = useState({});
  const [categoriesFromFilter, setCategoriesFromFilter] = useState({});
  const [sortOption, setSortOption] = useState("");
  const [paginationLinksNumber, setPaginationLinksNumber] = useState(null);
  const [pageNum, setPageNum] = useState(null);

  const { categoryName } = useParams() || "";
  const { pageNumParam } = useParams() || 1;
  const { searchQuery } = useParams() || "";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryName) {
      let categoryAllData = categories.find(
        (item) => item.name === categoryName.replaceAll(",", "/")
      );
      if (categoryAllData) {
        let mainCategory = categoryAllData.name.split("/")[0];
        let index = categories.findIndex((item) => item.name === mainCategory);
        if (
          index !== -1 &&
          categories[index] &&
          categories[index].attrs &&
          Array.isArray(categories[index].attrs)
        ) {
          setAttrsFilter(categories[index].attrs);
        } else {
          setAttrsFilter([]);
        }
      }
    } else {
      setAttrsFilter([]);
    }
  }, [categoryName, categories]);
  

  useEffect(() => {
    if (Object.entries(categoriesFromFilter).length > 0) {
      setAttrsFilter([]);
      var cat = [];
      var count;
      Object.entries(categoriesFromFilter).forEach(([category, checked]) => {
        if (checked) {
          var name = category.split("/")[0];
          cat.push(name);
          count = cat.filter((x) => x === name).length;
          if (count === 1) {
            var index = categories.findIndex((item) => item.name === name);
            if (
              index !== -1 &&
              categories[index] &&
              categories[index].attrs &&
              Array.isArray(categories[index].attrs)
            ) {
              setAttrsFilter((attrs) => [...attrs, ...categories[index].attrs]);
            }
          }
        }
      });
    }
  }, [categoriesFromFilter, categories]);
  

  useEffect(() => {
    getProducts(categoryName, pageNumParam, searchQuery, filters, sortOption)
      .then((products) => {
        setProducts(products.products);
        setPaginationLinksNumber(products.paginationLinksNumber);
        setPageNum(products.pageNum);
        setLoading(false);
      })
      .catch((er) => {
        console.log(er);
        setError(true);
      });
  }, [categoryName, pageNumParam, searchQuery, filters, sortOption]);

  const handleFilters = () => {
     navigate(location.pathname.replace(/\/[0-9]+$/, "")); 
    setShowResetFiltersButton(true);
    setFilters({
      price: price,
      rating: ratingsFromFilter,
      category: categoriesFromFilter,
      attrs: attrsFromFilter,
    });
  };

  const resetFilters = () => {
    setShowResetFiltersButton(false);
    setFilters({});
    window.location.href = "/product-list";
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mt-3 sidebar">
              <SortOptionsComponent setSortOption={setSortOption} />
            </ListGroup.Item>
            <ListGroup.Item  className="sidebar">
              FILTER: <br />
              <PriceFilterComponent price={price} setPrice={setPrice} />
            </ListGroup.Item>
            <ListGroup.Item  className="sidebar">
              <RatingFilterComponent
                setRatingsFromFilter={setRatingsFromFilter}
              />
            </ListGroup.Item>
            {!location.pathname.match(/\/category/) && (
              <ListGroup.Item className="sidebar">
                <CategoryFilterComponent
                  setCategoriesFromFilter={setCategoriesFromFilter}
                />
              </ListGroup.Item>
            )}
            <ListGroup.Item className="sidebar"> 
              <AttributesFilterComponent
                attrsFilter={attrsFilter}
                setAttrsFromFilter={setAttrsFromFilter}
              />
            </ListGroup.Item>
            <ListGroup.Item className="sidebar">
              <Button variant="primary" onClick={handleFilters}>
                Filter
              </Button>{" "}
              {showResetFiltersButton && (
                <Button onClick={resetFilters} variant="danger">
                  Reset filters
                </Button>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {loading ? (
            <h1>Loading products ....</h1>
          ) : error ? (
            <h1>Error while loading products. Try again later.</h1>
          ) : (
            products.map((product) => (
              <ProductForListComponent
                key={product._id}
                images={product.images}
                name={product.name}
                description={product.description}
                price={product.price}
                rating={product.rating}
                reviewsNumber={product.reviewsNumber}
                productId={product._id}
              />
            ))
          )}
          {paginationLinksNumber > 1 ? (
            <PaginationComponent
              categoryName={categoryName}
              searchQuery={searchQuery}
              paginationLinksNumber={paginationLinksNumber}
              pageNum={pageNum}
            />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPageComponent;

