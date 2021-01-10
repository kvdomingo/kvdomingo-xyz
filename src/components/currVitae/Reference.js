import React from "react";
import { MDBTypography as Type } from "mdbreact";
import TimelineSection from "./TimelineSection";
import Loading from "../../shared/Loading";

export default class Reference extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    fetch("/api/cv/reference")
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }));
  }

  render() {
    let { data } = this.state;

    if (this.state.loading) return <Loading />;
    else
      return (
        <TimelineSection sectionName="References" icon="user-friends">
          <ul className="timeline">
            {data.map((dat, i) => (
              <li key={i}>
                <Type tag="h4" variant="h4-responsive" className="mb-0 d-md-inline">
                  {dat.name}
                </Type>
                <p className="lead py-0">
                  <a
                    href={`mailto:${dat.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "mediumvioletred" }}
                  >
                    {dat.email}
                  </a>
                </p>
                <div className="mt-2 mb-5">
                  {dat.position}, {dat.institution}
                </div>
              </li>
            ))}
          </ul>
        </TimelineSection>
      );
  }
}
