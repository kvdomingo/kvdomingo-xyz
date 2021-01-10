import React from "react";
import { MDBTypography as Type, MDBIcon as Icon } from "mdbreact";
import HtmlParser from "react-html-parser";
import dateFormat from "dateformat";
import TimelineSection from "./TimelineSection";
import Loading from "../../shared/Loading";

export default class Publication extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    fetch("/api/cv/publication")
      .then(res => res.json())
      .then(data => {
        data.forEach((dat, i) => {
          dat.publication_date = dateFormat(new Date(dat.publication_date), "mmm yyyy");
        });
        this.setState({ data, loading: false });
      });
  }

  render() {
    let { data } = this.state;

    if (this.state.loading) return <Loading />;
    else
      return (
        <TimelineSection sectionName="Publications" icon="newspaper">
          <ul className="timeline">
            {data.map((dat, i) => (
              <li key={i}>
                <Type tag="h4" variant="h4-responsive" className="mb-0 d-md-inline">
                  {dat.title}
                </Type>
                <div className="timeline-date text-muted float-md-right my-md-0 my-2">
                  <Icon far icon="clock" className="mr-1" />
                  {dat.publication_date}
                </div>
                <p className="lead py-0">
                  <a href={dat.url} target="_blank" rel="noopener noreferrer" style={{ color: "mediumvioletred" }}>
                    {dat.journal}, {dat.volume} {dat.journal_code}
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
