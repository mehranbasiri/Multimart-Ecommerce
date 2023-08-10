import React, { useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Helmett from "../Helmet/Helmett";
import "../../styles/Product-details.css";
import CommonSection from "../UI/CommonSection";
import { motion } from "framer-motion";
import ProductList from "../UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import Toast from "reactstrap";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [tab, setTab] = useState("desc");
  const [rating, setrating] = useState(null);
  const dispatch = useDispatch();
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    shortDesc,
    reviews,
    description,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("product added seccessfully");
  };

  return (
    <Helmett title={productName}>
      <CommonSection />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span onClick={() => setrating(1)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setrating(2)}>
                      <i class="ri-star-s-fill"></i>
                    </span>{" "}
                    <span onClick={() => setrating(3)}>
                      <i class="ri-star-s-fill"></i>
                    </span>{" "}
                    <span onClick={() => setrating(4)}>
                      <i class="ri-star-s-fill"></i>
                    </span>{" "}
                    <span onClick={() => setrating(5)}>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <div>
                    <p>
                      (<span>{avgRating}</span>) rating
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className="mb-3 mt-4">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__teb" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__teb" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>jhon Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review__form">
                      <h4>Leave Your Experience </h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter Name"
                            ref={reviewUser}
                          />
                        </div>
                      </form>
                      <div className="form__group d-flex align-items-center gap-5">
                        <span>
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          2<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          3<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          4<i class="ri-star-s-fill"></i>
                        </span>
                        <span>
                          5<i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="form__group">
                        <textarea
                          type="text"
                          rows={4}
                          ref={reviewMsg}
                          placeholder="Review Message..."
                        />
                      </div>
                      <button type="submit" className="buy__btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-3">
              <h2 className="rating__title">
                <h2>You might also like</h2>
              </h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmett>
  );
};

export default ProductDetails;
