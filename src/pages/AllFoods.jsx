import React, { useState,useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [category, setCategory] = useState("");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "HEALTHY") {
      const filteredProducts = products.filter(
        (item) => item.category === "Healthy"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "UNHEALTHY") {
      const filteredProducts = products.filter(
        (item) => item.category === "Unhealthy"
      );

      setAllProducts(filteredProducts);
    }

  }, [category]);

  return (
    <Helmet title="Menu">
      <CommonSection title="All Foods" />
            <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4 ">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "HEALTHY" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("HEALTHY")}
                >
                  Healthy
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "UNHEALTHY" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("UNHEALTHY")}
                >
                  Unhealthy
                </button>

              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
