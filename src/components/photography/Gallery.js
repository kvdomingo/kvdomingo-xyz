import React, { Component } from "react";
import { Image } from "cloudinary-react";
import { withRouter } from "react-router-dom";
import TitleComponent from "../../shared/TitleComponent";
import Masonry from "masonry-layout/masonry";
import imagesLoaded from "imagesloaded/imagesloaded";
import { SRLWrapper } from "simple-react-lightbox";
import "./Gallery.css";
import api from "../../utils/Endpoints";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoaded: false,
    };

    this.handlePhotos = this.handlePhotos.bind(this);
  }

  componentDidMount() {
    this.handlePhotos();
  }

  handlePhotos() {
    let { photogPage } = this.props.match.params;
    let slug = photogPage ? photogPage : "latest";
    api.photography
      .gallery(slug)
      .then(res => {
        let { data } = res;
        this.setState({ images: data.images || [] });
        const grid = document.querySelector(".grid");
        const msnry = new Masonry(grid, {
          itemSelector: ".grid-item",
          columnWidth: ".grid-sizer",
          percentPosition: true,
        });
        const imgLoad = new imagesLoaded(grid);
        imgLoad.on("progress", () => {
          msnry.layout();
          this.setState({ isLoaded: true });
        });
        imgLoad.on("done", () => {
          msnry.layout();
        });
        imgLoad.on("always", () => {
          msnry.layout();
        });
      })
      .catch(err => console.error(err.message));
  }

  render() {
    var gridItem = "";
    let contentVisible = this.state.isLoaded ? "block-inline" : "none";
    let loaderVisible = this.state.isLoaded ? "none" : "block-inline";
    let { photogPage } = this.props.match.params;
    let title = photogPage ? `${photogPage[0].toUpperCase()}${photogPage.slice(1)} | Photography` : "Photography";
    return (
      <React.Fragment>
        <TitleComponent
          title={title}
          description={`${title} section of the photography portfolio of Kenneth V. Domingo`}
          keywords="photography, latest, live, clients, portraits, portfolio, kvdomingo, KVD Studio, Kenneth V. Domingo"
        />
        <div className="grid text-center">
          <div className="text-center mt-5 my-5 spinner-grow spinner-grow-lg" style={{ display: loaderVisible }} />
          <div className="grid-sizer" />
          <SRLWrapper style={{ display: contentVisible }}>
            {this.state.images.map((im, i) => {
              if (im.width > 3 * im.height) {
                gridItem = "grid-item--width4";
              } else if (im.width > 2 * im.height && im.width < 3 * im.height) {
                gridItem = "grid-item--width3";
              } else if (im.width > im.height && im.width < 2 * im.height) {
                gridItem = "grid-item--width2";
              } else {
                gridItem = "grid-item";
              }

              return (
                <div key={i} className={`grid-item ${gridItem} px-md-2 px-lg-3 px-0 py-2 mx-0`}>
                  <Image
                    publicId={im.publicId}
                    cloudName="kdphotography-assets"
                    responsive
                    responsiveUseBreakpoints
                    crop="scale"
                    dpr="auto"
                    width="auto"
                    className="cld-shadow img-fluid mb-2"
                  />
                </div>
              );
            })}
          </SRLWrapper>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Gallery);
