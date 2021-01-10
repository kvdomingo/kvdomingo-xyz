import React from "react";
import { MDBCard as Card, MDBContainer as Container } from "mdbreact";
import { Image } from "cloudinary-react";

const styles = {
  coverPhoto: {
    backgroundAttachment: "fixed",
    backgroundImage:
      'url("https://res.cloudinary.com/kdphotography-assets/image/upload/v1/kdphotography/portfolio/static/portfolio/media-private/latest/20180713_1.jpg")',
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 0,
    boxShadow: "none",
  },
};

export default class Cover extends React.Component {
  render() {
    return (
      <div>
        <Card className="card-image cover-photo" style={styles.coverPhoto}>
          <div className="text-white rgba-black-strong h-100 py-5 px-1 px-md-5">
            <Container className="p-5 d-flex h-100 align-items-center justify-content-center" data-aos="fade-up">
              <Image
                cloudName={"kdphotography-assets"}
                publicId={"logo/logo-white"}
                responsive
                responsiveUseBreakpoints
                secure
                width={"auto"}
                dpr={"auto"}
                className={"p-3 p-md-5"}
                style={{
                  border: "3px solid white",
                }}
              />
            </Container>
          </div>
        </Card>
      </div>
    );
  }
}
