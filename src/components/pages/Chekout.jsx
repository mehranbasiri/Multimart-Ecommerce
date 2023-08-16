import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import Helmett from "../Helmet/Helmett";
import "../../styles/Checkout.css";
import CommonSection from "../UI/CommonSection";
import { useSelector } from "react-redux";

const Chekout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantiy);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmett title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row className="row">
            <Col lg="6">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter Your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Enter Your Number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter Your Address" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter Your City" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>

                <h6>
                  Shipping:
                  <br />
                  free shipping <span>0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>

                <button className="buy__btn auth__btn w-100">
                  Place an order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmett>
  );
};

export default Chekout;
