import React, { Component } from "react";
import { MDBNav as Nav } from "mdbreact";
import { Link, withRouter } from "react-router-dom";

const styles = {
  navPills: {
    position: "sticky",
    top: "100px",
  },
};

export default withRouter(
  class Photography extends Component {
    constructor(props) {
      super(props);

      this.togglePills = this.props.togglePills;
      this.handleActivePill = this.handleActivePill.bind(this);
    }

    componentDidMount() {
      this.handleActivePill();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.url !== prevProps.match.url) {
        this.handleActivePill();
      }
    }

    handleActivePill() {
      let url = window.location.pathname;
      let activePage = url.split("/").slice(-1)[0] === "photography" ? "latest" : url.split("/").slice(-1)[0];
      if (url.split("/").slice(-2)[0] === "clients") activePage = "clients";
      this.togglePills(null, activePage);
    }

    render() {
      let { url } = this.props.match;
      let { activePage } = this.props;
      return (
        <Nav
          tag="div"
          className="nav-pills flex-column pl-md-2 pl-0 text-md-left text-center"
          style={styles.navPills}
          orientation="vertical"
        >
          <Link
            to={url}
            onClick={e => this.togglePills(e, "latest")}
            className={`nav-link my-1 ${activePage === "latest" ? "active" : null}`}
          >
            latest
          </Link>
          <Link
            to={`${url}/portraits`}
            onClick={e => this.togglePills(e, "portraits")}
            className={`nav-link my-1 ${activePage === "portraits" ? "active" : null}`}
          >
            portraits
          </Link>
          <Link
            to={`${url}/live`}
            onClick={e => this.togglePills(e, "live")}
            className={`nav-link my-1 ${activePage === "live" ? "active" : null}`}
          >
            live
          </Link>
          <Link
            to={`${url}/clients`}
            onClick={e => this.togglePills(e, "clients")}
            className={`nav-link my-1 ${activePage === "clients" ? "active" : null}`}
          >
            clients
          </Link>
          <Link
            to={`${url}/samoetikerffa`}
            onClick={e => this.togglePills(e, "samoetikerffa")}
            className={`nav-link my-1 ${activePage === "samoetikerffa" ? "active" : null}`}
          >
            #samoetikerffa
          </Link>
        </Nav>
      );
    }
  },
);
