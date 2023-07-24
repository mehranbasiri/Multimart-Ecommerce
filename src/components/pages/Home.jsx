import React from "react";
import Helmett from "../Helmet/Helmett";
import "../../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero-img.png";
import Services from "../../services/Services";
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmett title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Tranding product in {year}</p>

                <h2>Make Your More Minimalistic & Modern</h2>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  ut sapiente neque pariatur! Atque corrupti, sequi culpa alias
                  obcaecati eaque! Quasi nobis laudantium ipsam. Laborum dolorem
                  cumque exercitationem rem dignissimos?
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </Helmett>
  );
};
export default Home;
