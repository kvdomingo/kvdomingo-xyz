import React from "react";
import { MDBTypography as Typography, MDBContainer as Container, MDBRow as Row, MDBCol as Col } from "mdbreact";
import Loading from "../../shared/Loading";
import api from "../../utils/Endpoints";

export default class WhatIDo extends React.Component {
  state = {
    headers: "",
    technologies: "",
    loading: true,
  };

  componentDidMount() {
    api.home
      .technologies()
      .then(res => {
        let headers = ["Backend", "Frontend", "Database", "CI/CD & Platforms", "Data & Vis"];
        let technologies = res.data;
        this.setState({ headers, technologies, loading: false });
      })
      .catch(err => console.error(err.message));

    // fetch("/api/home/technology")
    //   .then(async res => await res.json())
    //   .then(technologies => {
    //     let headers = ["Backend", "Frontend", "Database", "CI/CD & Platforms", "Data & Vis"];
    //     this.setState({
    //       headers,
    //       technologies,
    //       loading: false,
    //     });
    //   });
  }

  render() {
    if (this.state.loading) return <Loading />;
    else {
      let { headers, technologies } = this.state;
      return (
        <Container fluid className="py-5">
          <Container className="py-5">
            <div data-aos="fade-up">
              <Typography tag="h1" variant="h1-responsive" className="text-center section-header">
                How I Do It
              </Typography>
              <hr className="grey darken-1 mt-4 mb-5" />
              {headers.map((head, i) => (
                <div key={i} data-aos="fade-up" className="mb-5">
                  <Row>
                    <Col md="3">
                      <Typography tag="h4" variant="h2-responsive" className="my-4 text-md-right section-header">
                        {head}
                      </Typography>
                    </Col>
                    <Col
                      md="9"
                      className="pl-0 pl-md-4"
                      style={{
                        borderLeft: "1px solid #ccc",
                      }}
                    >
                      <Row className="row-cols-2 row-cols-md-6">
                        {technologies
                          .filter(obj => obj.category === head)
                          .map((obj, i) => (
                            <Col className="my-auto pb-4" key={i}>
                              <img src={obj.url} className="img-fluid" alt={obj.alt} />
                            </Col>
                          ))}
                      </Row>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Container>
        </Container>
      );
    }
  }
}
