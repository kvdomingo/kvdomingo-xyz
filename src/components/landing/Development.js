import React from "react";
import { MDBCol as Col, MDBRow as Row, MDBTypography as Typography, MDBContainer as Container } from "mdbreact";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Development({ content }) {
  return (
    <Container className="py-5" data-aos="fade-up">
      <Row className="row-cols-1 row-cols-md-2">
        <Col className="my-auto">
          <Typography tag="h3" variant="h2-responsive" className="mb-3 section-header">
            {content.section_header}
          </Typography>
          <p className="mb-3">{content.section_body}</p>
          <Link to={content.link_to_portfolio} className="ml-0 btn btn-outline-white mb-3 mb-md-0">
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

Development.propTypes = {
  content: PropTypes.shape({
    section_header: PropTypes.string.isRequired,
    section_body: PropTypes.string.isRequired,
    link_to_portfolio: PropTypes.string.isRequired,
  }).isRequired,
};

export default Development;
