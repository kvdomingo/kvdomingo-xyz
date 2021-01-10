import React from "react";
import { MDBTypography as Type } from "mdbreact";
import TimelineSection from "./TimelineSection";
import Loading from "../../shared/Loading";
import api from "../../utils/Endpoints";

export default class Reference extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    api.cv
      .references()
      .then(res => {
        let { data } = res;
        this.setState({ data, loading: false });
      })
      .catch(err => console.error(err.message));
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
