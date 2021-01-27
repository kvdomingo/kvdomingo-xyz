import React, { useEffect, useState } from "react";
import { MDBContainer as Container, MDBTypography as Typography } from "mdbreact";
import Photography from "./Photography";
import Vip from "./Vip";
import Dev from "./Development";
import Loading from "../../shared/Loading";
import api from "../../utils/Endpoints";

export default function WhatIDo() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});

  useEffect(() => {
    api.home
      .content()
      .then(res => {
        setContent(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err.message));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container fluid className="py-5 bg-dark text-white">
      <Container fluid className="py-5">
        <div data-aos="fade-up">
          <Typography tag="h1" variant="h1-responsive" className="text-center section-header">
            What I Do
          </Typography>
          <hr className="grey darken-1 mt-4 mb-5" />
        </div>
        <Photography content={content[0]} />
        <Vip content={content[1]} />
        <Dev content={content[2]} />
      </Container>
    </Container>
  );
}
