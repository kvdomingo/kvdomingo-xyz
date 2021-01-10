import React, { Component } from "react";
import { MDBCol as Col, MDBRow as Row, MDBContainer as Container } from "mdbreact";
import { Image } from "cloudinary-react";
import HtmlParser from "react-html-parser";

export default class MultiFigure extends Component {
  render() {
    return (
      <Container id={this.props.id} className="text-center my-5 px-md-5">
        <Row className={`row-cols-1 row-cols-md-${this.props.columns}`}>
          {this.props.data.map((image, i) => (
            <Col className="my-auto" key={i}>
              <Image
                cloudName="kdphotography-assets"
                secure
                publicId={`svip/${this.props.subject}/${this.props.folder}/${image.url}`}
                className="img-fluid mx-auto"
                responsive
                responsiveUseBreakpoints
                width="auto"
                dpr="auto"
                crop="scale"
              />
              <div className="subfigure d-inline">
                <p className="d-inline">{image.caption}</p>
              </div>
            </Col>
          ))}
        </Row>
        <p className="mt-2">{HtmlParser(this.props.caption)}</p>
      </Container>
    );
  }
}
