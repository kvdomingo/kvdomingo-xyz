import React from "react";
import { MDBCol as Col, MDBRow as Row, MDBTypography as Typography, MDBContainer as Container } from "mdbreact";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

export default class Photography extends React.Component {
  render() {
    return (
      <Container className="py-5" data-aos="fade-up">
        <Row>
          <Col md="7" className="my-auto">
            <Typography tag="h3" variant="h2-responsive" className="mb-3 section-header">
              Photography
            </Typography>
            <p className="mb-3">
              As the former Executive Officer for Promotions and Documentation of UP Iris&mdash;a university-wide
              student organization&mdash;I received and conducted training in the art of storytelling through
              photography. Today, I continue to draw inspiration and learnings from established photographers, both
              foreign and local, in order to hone my own craft. I mainly focus on portrait, studio, and events
              photography. However, I do like to be well-rounded, and I don't mind venturing into street, landscape, and
              product photography every once in a while.
            </p>
            <Link to="/photography" className="ml-0 btn btn-outline-white mb-3 mb-md-0">
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
}
