import React, { Component } from "react";
import { MDBCol as Col } from "mdbreact";
import { Image } from "cloudinary-react";

export default class SubfigureCap extends Component {
  render() {
    return this.props.images.map((image, i) => (
      <Col key={i}>
        <Image
          className="img-fluid mx-auto"
          secure
          responsive
          responsiveUseBreakpoints
          cloudName="kdphotography-assets"
          publicId={`svip/186/4-MeasuringArea/${image}`}
        />
        <div className="subfigure d-inline">
          <p className="d-inline text-capitalize">{image.split("_").slice(-1)[0]}</p>
        </div>
      </Col>
    ));
  }
}
