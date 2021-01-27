import React from "react";
import { MDBCol as Col, MDBRow as Row, MDBTypography as Typography, MDBContainer as Container } from "mdbreact";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import PropTypes from "prop-types";

function Photography({ content }) {
  return (
    <Container className="py-5" data-aos="fade-up">
      <Row>
        <Col md="7" className="my-auto">
          <Typography tag="h3" variant="h2-responsive" className="mb-3 section-header">
            {content.section_header}
          </Typography>
          <p className="mb-3">{content.section_body}</p>
          <Link to={content.link_to_portfolio} className="ml-0 btn btn-outline-white mb-3 mb-md-0">
            See portfolio
          </Link>
        </Col>
        <Col md="5" className="text-center">
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
}

Photography.propTypes = {
  content: PropTypes.shape({
    section_header: PropTypes.string.isRequired,
    section_body: PropTypes.string.isRequired,
    link_to_portfolio: PropTypes.string.isRequired,
  }).isRequired,
};

export default Photography;
