import React, { Component } from "react";
import { MDBRow as Row, MDBCol as Col, MDBCard as Card } from "mdbreact";
import { Link, withRouter } from "react-router-dom";
import TitleComponent from "../../shared/TitleComponent";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
  }

  componentDidMount() {
    let { path } = this.props.match;
    if (path.split("/").slice(-1)[0] === "clients") {
      fetch("/api/photography/client")
        .then(res => res.json())
        .then(clients => this.setState({ clients }));
    }
  }

  render() {
    let { url } = this.props.match;
    return (
      <React.Fragment>
        <TitleComponent
          title="Clients | Photography"
          description="Clients section of the photography portfolio of Kenneth V. Domingo"
          keywords="clients, photography, portfolio, kvdomingo, KVD Studio, Kenneth V. Domingo"
        />
        <div>
          <Row className="row-cols-1 row-cols-lg-2 row-cols-xl-3">
            {this.state.clients.map((cli, i) => (
              <Col className="mb-4" key={i}>
                <Card
                  className="card-image h-100"
                  style={{
                    backgroundImage: `url("${cli.cover_image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <div className="text-white text-center rgba-black-light p-5 h-100">
                    <div className="py-5">
                      <Link to={`${url}/${cli.slug}`} className="btn btn-outline-white btn-lg card-title my-5">
                        {cli.name}
                      </Link>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Clients);
