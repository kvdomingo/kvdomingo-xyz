import React, { Component } from "react";
import { MDBContainer as Container, MDBRow as Row, MDBCol as Col, MDBCard as Card } from "mdbreact";
import { Link, withRouter } from "react-router-dom";
import Loading from "../../shared/Loading";
import TitleComponent from "../../shared/TitleComponent";
import "./Svip.css";

export default withRouter(
  class Svip extends Component {
    constructor(props) {
      super(props);
      this.state = {
        courses: [],
        isLoaded: false,
      };
    }

    componentDidMount() {
      fetch("/api/svip/course")
        .then(res => res.json())
        .then(courses =>
          this.setState({
            courses,
            isLoaded: true,
          }),
        );
    }

    render() {
      let { url } = this.props.match;
      return (
        <React.Fragment>
          <TitleComponent
            title="Coursework"
            description="Portfolio of Kenneth V. Domingo with relevant coursework such as signal, video, and image processing"
            keywords="signal processing, image processing, video processing, computational physics, applied physics, app physics, coursework, kvdomingo, Kenneth V. Domingo"
          />
          {!this.state.isLoaded ? (
            <Loading />
          ) : (
            <Container fluid className="my-5">
              <Row className="row-cols-1 row-cols-lg-2 row-cols-xl-3">
                {this.state.courses.map((course, i) => (
                  <Col className="mb-4" key={i}>
                    <Card className="card-image card-cover h-100" style={{ backgroundImage: `url("${course.cover}")` }}>
                      <div className="text-white text-md-center text-left align-items-center h-100 rgba-black-strong py-5 px-4">
                        <Link to={`${url}/${course.slug}`} className="card-title btn btn-outline-white my-3">
                          {course.name}: {course.title}
                        </Link>
                        <p className="card-text">{course.description}</p>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          )}
        </React.Fragment>
      );
    }
  },
);
