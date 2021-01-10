import React, { Component } from "react";
import { MDBTypography as Typography, MDBIcon as Icon } from "mdbreact";
import { Link } from "react-router-dom";
import HtmlParser from "react-html-parser";
import PropTypes from "prop-types";

export default class TimelineElement extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string.isRequired,
    connection: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }),
    ).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    related: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.extractScript = [];
  }

  componentDidMount() {
    this.extractScript.map((script, i) => (script ? window.eval(script[1]) : null));
  }

  render() {
    return (
      <li>
        <Typography tag="h4" variant="h4-responsive" className="mb-0 d-md-inline">
          {this.props.title}
        </Typography>
        <div className="timeline-date text-muted float-md-right my-md-0 my-2">
          <Icon far icon="clock" className="mr-1" />
          {this.props.startDate === "" ? `${this.props.endDate}` : `${this.props.startDate} – ${this.props.endDate}`}
        </div>
        <p className="lead py-0">
          {this.props.connection.map((conn, i) => {
            if (i === 0) {
              return (
                <React.Fragment key={i}>
                  <a href={conn.href} target="_blank" rel="noopener noreferrer" style={{ color: "mediumvioletred" }}>
                    {conn.name}{" "}
                  </a>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={i}>
                  |{" "}
                  <a href={conn.href} target="_blank" rel="noopener noreferrer" style={{ color: "mediumvioletred" }}>
                    {conn.name}
                  </a>
                </React.Fragment>
              );
            }
          })}
        </p>
        <div className="mt-2 mb-5">
          {this.props.description.map((desc, i) => {
            this.extractScript.push(/<script>(.+)<\/script>/gi.exec(desc));
            if (this.extractScript[i]) desc = desc.replace(this.extractScript[i][0], "");
            return (
              <p className="my-0" key={i}>
                {HtmlParser(desc)}
              </p>
            );
          })}
          {this.props.related ? (
            <Link to={`/${this.props.related}`} className="btn btn-outline-black btn-sm ml-0 mt-3">
              See in portfolio
            </Link>
          ) : null}
        </div>
      </li>
    );
  }
}
