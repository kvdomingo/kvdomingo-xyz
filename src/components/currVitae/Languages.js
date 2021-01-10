import React from "react";
import TimelineSection from "./TimelineSection";

export default function Languages() {
  return (
    <TimelineSection sectionName="Top GitHub Languages" icon="code">
      <div className="text-center">
        <iframe
          title="Top GitHub languages"
          width="600"
          height="600"
          src="https://ionicabizau.github.io/github-profile-languages/api.html?kvdomingo"
          frameBorder="0"
        />
      </div>
    </TimelineSection>
  );
}
