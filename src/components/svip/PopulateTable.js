import React, { Component } from "react";

export default class PopulateTable extends Component {
  constructor(props) {
    super(props);
    this.tabEl = [this.props.patchId, this.props.lab, this.props.lch];
  }

  render() {
    return (
      <tr>
        {this.tabEl.map((el, i) => (
          <td key={i}>{el}</td>
        ))}
      </tr>
    );
  }
}
