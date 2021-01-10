import React from "react";
import { MDBFooter as Footer, MDBContainer as Container, MDBIcon as Icon } from "mdbreact";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

export default class PageFooter extends React.Component {
  render() {
    return (
      <Footer className="bg-dark pt-5">
        <Container fluid className="text-center py-4">
          <Link to="/" className="d-block">
            <Image
              publicId="logo/logo-white"
              cloudName="kdphotography-assets"
              secure={true}
              alt="KVD Studio logo"
              height={70}
            />
          </Link>
          <a href="mailto:hello@kvdomingo.xyz" className="d-block my-2">
            hello@kvdomingo.xyz
          </a>
          <br />
          <div className="my-1">
            <a className="mx-2" href="https://linkedin.com/in/kvdomingo" target="_blank" rel="noopener noreferrer">
              <Icon fab icon="linkedin" size="2x" />
            </a>
            <a className="mx-2" href="https://github.com/kvdomingo" target="_blank" rel="noopener noreferrer">
              <Icon fab icon="github" size="2x" />
            </a>
          </div>
        </Container>
        <div className="footer-copyright text-center py-4">
          &copy;{" "}
          {(() => {
            let d = new Date();
            return d.getFullYear();
          })()}{" "}
          <a href="mailto:hello@kvdomingo.xyz">Kenneth V. Domingo</a>
        </div>
      </Footer>
    );
  }
}
