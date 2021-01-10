import React from "react";
import { MDBContainer as Container, MDBTypography as Typography } from "mdbreact";
import Photography from "./Photography";
import Vip from "./Vip";
import Dev from "./Development";

export default class WhatIDo extends React.Component {
  render() {
    return (
      <Container fluid className="py-5 bg-dark text-white">
        <Container fluid className="py-5">
          <div data-aos="fade-up">
            <Typography tag="h1" variant="h1-responsive" className="text-center section-header">
              What I Do
            </Typography>
            <hr className="grey darken-1 mt-4 mb-5" />
          </div>
          <Photography />
          <Vip />
          <Dev />
        </Container>
      </Container>
    );
  }
}
