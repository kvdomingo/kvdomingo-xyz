import React, { Component } from "react";
import {
  MDBTypography as Typography,
  MDBIcon as Icon,
  MDBBadge as Badge,
  MDBTable as Table,
  MDBTableBody as TableBody,
  MDBTableHead as TableHead,
  MDBContainer as Container,
} from "mdbreact";
import { withRouter } from "react-router-dom";
import { Image } from "cloudinary-react";
import TitleComponent from "../../shared/TitleComponent";
import dateFormat from "dateformat";
import JsxParser from "react-jsx-parser";
import Highlight from "react-highlight.js";
import MathJax from "react-mathjax";
import IFrame from "react-iframe";
import Cite from "./Cite";
import Figure from "./Figure";
import MultiFigure from "./MultiFigure";
import AreaFigure from "./AreaFigure";
import Loading from "../../shared/Loading";
import PopulateTable from "./PopulateTable";
import "./Svip.css";

export default withRouter(
  class Post extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        post: [],
      };

      this.node = React.createRef();
    }

    componentDidMount() {
      let { postSlug } = this.props.match.params;
      fetch(`/api/svip/blogpost?slug=${postSlug}`)
        .then(res => res.json())
        .then(post => {
          post = post[0];
          this.setState({ post, isLoaded: true });
        });
    }

    render() {
      let { created } = this.state.post;
      created = dateFormat(created, "HH:MM, d mmm yyyy");
      return !this.state.isLoaded ? (
        <Loading />
      ) : (
        <div>
          <TitleComponent
            title={`${this.state.post.title} | ${this.props.subject.name}`}
            description={`${this.props.subject.name} - ${this.state.post.title}`}
            keywords={`${this.state.post.keywords}, applied physics, app physics, ${this.props.subject.name}, computational physics, kvdomingo, Kenneth V. Domingo`}
          />
          <Typography tag="h1">{this.state.post.title}</Typography>
          <Icon far icon="clock" className="mr-1 text-muted"></Icon>
          <p className="text-muted d-inline">{created}</p>
          <div className="my-5" ref={this.node}>
            <MathJax.Provider>
              <JsxParser
                bindings={{
                  algo_data: ["spot", "Sobel", "Prewitt", "Laplacian", "Canny"],
                  shape_data: ["circle", "square", "trapezoid", "triangle"],
                  mapNames: (prefix, shapes) => shapes.map((item, i) => `${prefix}_${item.toLowerCase()}`),
                  populateTable: data =>
                    Object.values(data)[0].map((el, i) => (
                      <PopulateTable lab={data.lab[i]} lch={data.lch[i]} key={i} patchId={i + 1} />
                    )),
                }}
                components={{
                  React,
                  MathJax,
                  Image,
                  Figure,
                  Cite,
                  IFrame,
                  MultiFigure,
                  AreaFigure,
                  Table,
                  TableBody,
                  TableHead,
                  Container,
                  Highlight,
                }}
                jsx={this.state.post.body}
              />
            </MathJax.Provider>
          </div>
          <div className="my-5">
            <Typography tag="h4">Keywords</Typography>
            {this.state.post.keywords.split(", ").map((keyword, i) => (
              <Badge key={i} color="light" className="m-1">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      );
    }
  },
);
