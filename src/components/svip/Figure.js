import React, { Component } from "react";
import { MDBCol as Col, MDBRow as Row, MDBContainer as Container } from "mdbreact";
import { Image } from "cloudinary-react";
import HtmlParser from "react-html-parser";
import PropTypes from "prop-types";

export default class Figure extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    publicId: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };

  render() {
    return (
      <Container id={this.props.id} className="text-center my-5 px-md-5">
        <Row className="row-cols-1 px-md-5">
          <Col className="my-auto px-md-5">
            <Image
              className="img-fluid mx-auto"
              cloudName="kdphotography-assets"
              publicId={this.props.publicId}
              secure
              responsive
              responsiveUseBreakpoints
              crop="scale"
              dpr="auto"
              width="auto"
            />
          </Col>
        </Row>
        <p className="mt-2">{HtmlParser(this.props.caption)}</p>
      </Container>
    );
  }
}
