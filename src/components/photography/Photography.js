import React, { Component, lazy } from "react";
import { MDBContainer as Container, MDBRow as Row, MDBCol as Col } from "mdbreact";
import { Route, Switch, withRouter } from "react-router-dom";
import Lightbox from "simple-react-lightbox";
import PhotoSidenav from "./PhotoSidenav";

const Gallery = lazy(() => import("./Gallery"));
const ClientGallery = lazy(() => import("./ClientGallery"));
const Clients = lazy(() => import("./Clients"));

class Photography extends Component {
  constructor(props) {
    super(props);
    this.togglePills = this.togglePills.bind(this);

    this.state = {
      activePage: "",
      togglePills: this.togglePills,
    };
  }

  togglePills(e, activePage) {
    this.setState({ activePage });
  }

  render() {
    let { path } = this.props.match;
    return (
      <React.Fragment>
        <Container fluid className="my-5">
          <Row>
            <Col lg="2" className="pt-2 pb-4 px-lg-4">
              <PhotoSidenav {...this.state} />
            </Col>
            <Col lg="10" className="pr-lg-5">
              <Switch>
                <Route path={`${path}/clients/:clientPage`}>
                  <Lightbox>
                    <ClientGallery key={this.state.activePage} />
                  </Lightbox>
                </Route>
                <Route exact path={`${path}/clients`}>
                  <Clients />
                </Route>
                <Route path={`${path}/:photogPage`}>
                  <Lightbox>
                    <Gallery key={this.state.activePage} />
                  </Lightbox>
                </Route>
                <Route exact path={path}>
                  <Lightbox>
                    <Gallery key={this.state.activePage} />
                  </Lightbox>
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Photography);
