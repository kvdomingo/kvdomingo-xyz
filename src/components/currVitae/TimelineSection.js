import React from "react";
import { MDBTypography as Typography, MDBContainer as Container, MDBIcon as Icon } from "mdbreact";
import PropTypes from "prop-types";

function TimelineSection(props) {
  return (
    <div data-aos="fade-up">
      <Typography tag="h2" variant="h2-responsive" className="py-4">
        <Icon fas icon={props.icon} className="mr-3" />
        {props.sectionName}
      </Typography>
      <Container className="px-md-5">{props.children}</Container>
    </div>
  );
}

TimelineSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default TimelineSection;
