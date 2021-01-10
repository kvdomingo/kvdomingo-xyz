import React from "react";
import { MDBTooltip as Tooltip } from "mdbreact";
import HtmlParser from "react-html-parser";
import PropTypes from "prop-types";

function Cite(props) {
  return (
    <div className="d-inline">
      <Tooltip domElement tag="span" placement="top">
        <span>
          [<a href={props.target}>{props.number}</a>]
        </span>
        <span>{HtmlParser(props.reference)}</span>
      </Tooltip>
    </div>
  );
}

Cite.propTypes = {
  target: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  reference: PropTypes.string.isRequired,
};

export default Cite;
