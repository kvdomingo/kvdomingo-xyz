import React from "react";
import { MDBTypography as Type, MDBIcon as Icon } from "mdbreact";
import HtmlParser from "react-html-parser";
import dateFormat from "dateformat";
import TimelineSection from "./TimelineSection";
import Loading from "../../shared/Loading";
import api from "../../utils/Endpoints";

export default class Certification extends React.Component {
  state = {
    data: [],
    script: [],
    loading: true,
  };

  componentDidMount() {
    api.cv
      .certifications()
      .then(res => {
        let { data } = res;
        let script = [];
        data.forEach(dat => {
          dat.date_granted = dateFormat(new Date(dat.date_granted), "mmm yyyy");
          script.push(/<script>(.+)<\/script>/gi.exec(dat.description));
          if (script) {
            dat.description = dat.description.replace(script[0], "");
          }
        });
        this.setState({ data, script, loading: false });
        // eslint-disable-next-line
        this.state.script.map(script => (script ? window.eval(script[1]) : null));
      })
      .catch(err => console.error(err.message));
  }

  render() {
    let { data } = this.state;

    if (this.state.loading) return <Loading />;
    else
      return (
        <TimelineSection sectionName="Certifications" icon="certificate">
          <ul className="timeline">
            {data.map((dat, i) => (
              <li key={i}>
                <Type tag="h4" variant="h4-responsive" className="mb-0 d-md-inline">
                  {dat.name}
                </Type>
                <div className="timeline-date text-muted float-md-right my-md-0 my-2">
                  <Icon far icon="clock" className="mr-1" />
                  {dat.date_granted}
                </div>
                <p className="lead py-0">
                  <a
                    href={dat.institution_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "mediumvioletred" }}
                  >
                    {dat.institution}
                  </a>
                </p>
                <div className="mt-2 mb-5">
                  {(() => {
                    return <p className="my-0">{HtmlParser(dat.description)}</p>;
                  })()}
                </div>
              </li>
            ))}
          </ul>
        </TimelineSection>
      );
  }
}
