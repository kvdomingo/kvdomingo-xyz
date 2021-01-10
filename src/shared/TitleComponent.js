import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

function TitleComponent(props) {
  const title = props.title ? `${props.title} | Kenneth V. Domingo` : `Kenneth V. Domingo`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keywords" content={props.keywords} />
      <meta name="description" content={props.description} />
      <meta name="og:description" content={props.description} />
      <meta name="twitter:description" content={props.description} />
    </Helmet>
  );
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

TitleComponent.defaultProps = {
  description: "Portfolio of Kenneth V. Domingo",
  keywords: "",
};

export default TitleComponent;
