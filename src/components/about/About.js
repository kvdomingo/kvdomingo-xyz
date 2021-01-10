import React from "react";
import { MDBCol as Col, MDBRow as Row, MDBContainer as Container } from "mdbreact";
import { Image } from "cloudinary-react";
import TitleComponent from "../../shared/TitleComponent";
import "./About.css";

export default function About() {
  return (
    <React.Fragment>
      <TitleComponent
        title="About"
        description="About Kenneth V. Domingo and KVD Studio"
        keywords="signal processing, image processing, video processing, computational physics, applied physics, app physics, coursework, kvdomingo, Kenneth V. Domingo"
      />

      <Container className={"mb-5"}>
        <Row>
          <Col md="4" className="mb-4 mb-md-0">
            <Image
              cloudName={"kdphotography-assets"}
              className="img-fluid image-shadow"
              publicId={"kdphotography/portfolio/static/portfolio/media-private/about/bio"}
              secure
              responsive
              responsiveUseBreakpoints
              width={"auto"}
              dpr={"auto"}
              crop={"scale"}
            />
          </Col>
          <Col md="8" className="pl-3 pl-md-5">
            <p>
              Hi, I'm Kenneth V. Domingo! I am an applied physics graduate from the University of the
              Philippines-Diliman. For my undergraduate thesis, I joined the Instrumentation Physics Laboratory with a
              research concentration on signal, video, and image processing. In my spare time, I like to dabble a bit in
              various fields like music composition & production, photography, artificial intelligence, electronics, and
              bioinformatics, to name a few. I am also an alumni and former Executive Officer for Promotions and
              Documentation of UP Iris, a university-wide photography organization.
            </p>
            <p>
              During my latter college years, I took several online classes and tutorials on web and mobile development
              (yup, not exactly related to my course). Because I primarily used Python in my research, my go-to stack is
              Django-React.js, and I primarily deploy web apps to Heroku and Vercel. Currently, I have several completed
              and ongoing web projects that I developed on my own, and I am also looking for web/software
              development-related jobs.
            </p>
            <p>Feel free to contact me for inquiries, collaborations, and other concerns!</p>
            <div>
              <a href="/cv" className="ml-0 btn btn-outline-black">
                CV
              </a>
              <a href="mailto:hello@kvdomingo.xyz" className="ml-0 btn btn-outline-black">
                Contact
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
