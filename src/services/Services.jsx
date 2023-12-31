import React from "react";
import "./Services.css";
import { Container, Row, Col } from "reactstrap";
import serviceData from "../assets/data/serviceData";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <Container>
      <Row>
        {serviceData.map((item, index) => (
          <Col lg="3" md="4" key={index}>
            <motion.div whileHover={{scale:1.1}} className="service__item" style={{ background: `${item.bg}` }}>
              <span>
                <i class={item.icon}></i>
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
