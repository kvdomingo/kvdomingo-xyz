import React from "react";
import { MDBCol as Col, MDBRow as Row, MDBTypography as Typography, MDBContainer as Container } from "mdbreact";
import { Link } from "react-router-dom";
import Juxtapose from "./Juxtapose";

export default class Vip extends React.Component {
  render() {
    return (
      <Container className="py-5" data-aos="fade-up">
        <Row className="row-cols-1 row-cols-md-2">
          <Col className="text-center mb-4 mb-md-0">
            <Juxtapose />
          </Col>
          <Col className="text-md-right my-auto">
            <Typography tag="h3" variant="h2-responsive" className="mb-3 section-header">
              Video & Image Processing
            </Typography>
            <p className="mb-3">
              For my undergraduate thesis, I joined the Instrumentation Physics Laboratory&ndash;Video &amp; Image
              Processing subgroup. My research was initially on blood spatter analysis (BPA). Due to limited equipment,
              I was tasked to find a way to extract useful information from possibly incomplete measurements. This led
              me to the field of compressive sensing (CS), which became my main field of research. In this endeavor, I
              utilized various technologies such as established signal processing techniques, as well as more
              contemporary machine learning and artificial intelligence approaches.
            </p>
            <Link to="/svip" className="mx-0 btn btn-outline-white mb-3 mb-md-0">
              See portfolio
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
