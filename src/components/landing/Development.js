import React from "react";
import { MDBCol as Col, MDBRow as Row, MDBTypography as Typography, MDBContainer as Container } from "mdbreact";
import { Link } from "react-router-dom";

export default class Development extends React.Component {
  render() {
    return (
      <Container className="py-5" data-aos="fade-up">
        <Row className="row-cols-1 row-cols-md-2">
          <Col className="my-auto">
            <Typography tag="h3" variant="h2-responsive" className="mb-3 section-header">
              Full Stack Development
            </Typography>
            <p className="mb-3">
              I am a full stack developer with several completed and ongoing projects, with Python as my primary
              development language. My go-to stack is Django-React.js, with regular maintenance and deployments to
              Heroku and Vercel. I develop web applications, web APIs, mobile applications, command-line interfaces, and
              Telegram/Discord bots, among others.
            </p>
            <Link to="/dev" className="ml-0 btn btn-outline-white mb-3 mb-md-0">
              See portfolio
            </Link>
          </Col>
          <Col className="my-auto">
            <div className="console">
              <div className="console-bar px-2">
                <div className="console-bar-red" />
                <div className="console-bar-yellow" />
                <div className="console-bar-green" />
                <div className="console-bar-title text-center pl-2">
                  <a href="https://primerdriver.herokuapp.com" target="_blank" rel="noopener noreferrer">
                    primerdriver/pdcli.py
                  </a>
                </div>
              </div>
              <div className="console-body py-4 px-3">
                <div className="code-command text-left">
                  <span />
                  <code>python pdcli.py -M char -s read.fasta -m sub -t C -p 21 -r G</code>
                </div>
                <pre>
                  <samp className="code-response">
                    {`|                  | Primer 1                                                                      |
|------------------+-------------------------------------------------------------------------------|
| Forward          | CGATCGTACGGACGCAGCTCGTAGCTACGATCGATCGATCGATCGTACGTACGTACGATCGTACGATCGATCGTACG |
| Reverse          | CGTACGATCGATCGTACGATCGTACGTACGTACGATCGATCGATCGATCGTAGCTACGAGCTGCGTCCGTACGATCG |
| Fwd length       | 77 bp                                                                         |
| Rev length       | 77 bp                                                                         |
| Fwd GC content   | 54.55%                                                                        |
| Rev GC content   | 54.55%                                                                        |
| Fwd melting temp | 94.76 C                                                                       |
| Rev melting temp | 94.76 C                                                                       |
| Fwd mol. weight  | 10083.12 g/mol                                                                |
| Rev mol. weight  | 10074.11 g/mol                                                                |
| Fwd mismatch     | 27.27%                                                                        |
| Rev mismatch     | 27.27%                                                                        |
| Fwd ends in G/C  | True                                                                          |
| Rev ends in G/C  | True                                                                          |`}
                  </samp>
                </pre>
                <div className="code-command">
                  <code />
                  <span className="cursor" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
