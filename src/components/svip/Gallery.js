import React, { Component } from "react";
import { MDBTypography as Typography, MDBRow as Row, MDBCol as Col, MDBCard as Card } from "mdbreact";
import { Link, withRouter } from "react-router-dom";
import "./Svip.css";

export default withRouter(
  class Gallery extends Component {
    render() {
      let { url } = this.props.match;
      return (
        <div>
          <div className="mb-4 px-3 px-md-0">
            <Typography tag="h1">{this.props.subject.name}</Typography>
            <Typography tag="h4">{this.props.subject.title}</Typography>
            <p>{this.props.subject.description}</p>
          </div>

          <Row className="row-cols-1 row-cols-lg-2 row-cols-xl-3">
            {this.props.posts.map((post, i) => (
              <Col className="mb-4" data-aos="fade-up" key={i}>
                <Card className="card-image card-cover h-100" style={{ backgroundImage: `url("${post.cover}")` }}>
                  <div className="text-white text-center align-items-center h-100 rgba-black-strong py-5 px-4">
                    <div className="py-5 h-100">
                      <Link to={`${url}/${post.slug}`} className="card-title btn btn-outline-white my-5">
                        {post.title}
                      </Link>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }
  },
);
