import React from "react";
import { MDBTypography as Type, MDBIcon as Icon } from "mdbreact";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import TimelineSection from "./TimelineSection";
import Loading from "../../shared/Loading";
import api from "../../utils/Endpoints";

export default class Work extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    api.cv
      .work()
      .then(res => {
        let { data } = res;
        data.forEach(dat => {
          dat.start_date = dateFormat(new Date(dat.start_date), "mmm yyyy");
          dat.end_date = dat.end_date ? dateFormat(new Date(dat.end_date), "mmm yyyy") : "present";
        });
        this.setState({ data, loading: false });
      })
      .catch(err => console.error(err.message));
  }

  render() {
    let { data } = this.state;

    if (this.state.loading) return <Loading />;
    else
      return (
        <TimelineSection sectionName="Work Experience" icon="briefcase">
          <ul className="timeline">
            {data.map((dat, i) => (
              <li key={i}>
                <Type tag="h4" variant="h4-responsive" className="mb-0 d-md-inline">
                  {dat.position}
                </Type>
                <div className="timeline-date text-muted float-md-right my-md-0 my-2">
                  <Icon far icon="clock" className="mr-1" />
                  {dat.start_date} – {dat.end_date}
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
                  <p>{dat.description}</p>
                  {dat.related_project ? (
                    <Link to={dat.related_project} className="btn btn-outline-black btn-sm ml-0 mt-3">
                      See in portfolio
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </TimelineSection>
      );
  }
}
