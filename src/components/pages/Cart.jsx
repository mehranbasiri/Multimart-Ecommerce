import React from "react";
import "../../styles/Cart.css";
import Helmett from "../Helmet/Helmett";
import CommonSection from "../UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import tdImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { cartActions } from "../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartitems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmett title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItem.length === 0 ? (
                <h2 className="fs-4 text-center">No Items added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes abd shiping will calculate in checkout
              </p>
              <div>
                <button className="buy__btn mt-3 w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn mt-3 w-100">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmett>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <motion.td whileTap={{ scale: 1.2 }} onClick={deleteProduct}>
        <i class="ri-delete-bin-line" onClick={deleteProduct}></i>
      </motion.td>
    </tr>
  );
};
export default Cart;
