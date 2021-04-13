import React from "react";
import Cover from "./Cover";
import WhatIDo from "./WhatIDo";
import HowIDoIt from "./HowIDoIt";
import TitleComponent from "../../shared/TitleComponent";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <TitleComponent
          title="Home"
          description="CV and Portfolio of Kenneth V. Domingo and KVD Studio including photography, relevant coursework, and web and app development"
          keywords="KVD Studio, Kenneth V. Domingo, Kenneth Domingo Photography, Python, photography, physics, applied physics, kvdomingo"
        />

        <Cover />
        <WhatIDo />
        <HowIDoIt />
      </div>
    );
  }
}
