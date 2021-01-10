import React, { Component, lazy } from "react";
import { MDBContainer as Container, MDBIcon as Icon } from "mdbreact";
import { Link, Route, withRouter } from "react-router-dom";
import Loading from "../../shared/Loading";
import TitleComponent from "../../shared/TitleComponent";
import "./Svip.css";

const Gallery = lazy(() => import("./Gallery"));
const Post = lazy(() => import("./Post"));

export default withRouter(
  class Subject extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: "",
        courses: [],
        coursesIsLoaded: false,
        posts: [],
        subject: "",
      };

      this.handleActivePill = this.handleActivePill.bind(this);
      this.togglePills = this.togglePills.bind(this);
    }

    componentDidMount() {
      this.handleActivePill();
      let { courseSlug } = this.props.match.params;
      fetch(`/api/svip/blogpost?subject__slug=${courseSlug}`)
        .then(res => res.json())
        .then(posts => this.setState({ posts }));
      fetch("/api/svip/course")
        .then(res => res.json())
        .then(courses => {
          let subject = courses.find(course => course.slug === courseSlug);
          this.setState({
            courses,
            coursesIsLoaded: true,
            subject,
          });
        });
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.activePage !== prevState.activePage) {
        this.handleActivePill();
      }
    }

    handleActivePill() {
      let url = window.location.pathname;
      let activePage = url.split("/").slice(-1)[0];
      this.setState({ activePage });
    }

    togglePills(e, activePage) {
      this.setState({ activePage });
    }

    render() {
      let { path } = this.props.match;
      let { courseSlug } = this.props.match.params;
      return (
        <React.Fragment>
          <TitleComponent
            title={`${this.state.subject.name} | Coursework`}
            description={`Portfolio & coursework on ${this.state.subject.name} (${this.state.subject.title}): ${this.state.subject.description}`}
            keywords={`${this.state.subject.description}, applied physics, app physics, ${this.state.subject.name}, computational physics, kvdomingo, Kenneth V. Domingo`}
          />
          {!this.state.coursesIsLoaded ? (
            <Loading />
          ) : (
            <Container className="my-5">
              <Route path={`${path}/:postSlug`}>
                <div className="mb-3">
                  <Link to={`/svip/${courseSlug}`}>
                    <Icon fas icon="angle-left" className="mr-1" /> Back to {this.state.subject.name}
                  </Link>
                </div>
                <Post subject={this.state.subject} />
              </Route>

              <Route exact path={path}>
                <div className="mb-3">
                  <Link to="/svip">
                    <Icon fas icon="angle-left" className="mr-1" /> Back to courses
                  </Link>
                </div>
                <Gallery key={this.state.activePage} {...this.state} />
              </Route>
            </Container>
          )}
        </React.Fragment>
      );
    }
  },
);
