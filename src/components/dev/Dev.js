import { useEffect, useState } from "react";
import { MDBContainer as Container, MDBCard as Card, MDBCardBody as CardBody, MDBIcon as Icon } from "mdbreact";
import dateFormat from "dateformat";
import TitleComponent from "../../shared/TitleComponent";
import Loading from "../../shared/Loading";
import api from "../../utils/Endpoints";
import "./Dev.css";

function Dev() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.dev
      .projects()
      .then(res => {
        setProjects(res.data);
        setIsLoaded(true);
      })
      .catch(err => console.error(err.message));
  }, []);

  return (
    <>
      <TitleComponent
        title="Web Development"
        description="Portfolio of Kenneth V. Domingo with relevant work on web development and software development"
        keywords="web development, app development, software development, full stack development, blog, dev diaries, kvdomingo, Kenneth V. Domingo"
      />
      {!isLoaded ? (
        <Loading />
      ) : (
        <Container fluid className="my-5">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="card-image card-cover mb-4"
              style={{ backgroundImage: `url("${project.cover_photo}")` }}
            >
              <div className="text-white text-md-center text-left align-items-center h-100 rgba-black-strong py-5 pt-5 px-4">
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  <Icon fas icon="external-link-alt" className="mr-2" />
                  {project.title}
                </a>
                <CardBody>
                  {project.organization ? (
                    <div>
                      <Icon fas icon="globe-asia" className="mr-2" />
                      <p className="d-inline">
                        <a
                          href={project.organization_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "mediumvioletred" }}
                        >
                          {project.organization}
                        </a>
                      </p>
                      <br />
                    </div>
                  ) : null}
                  <Icon far icon="clock" className="mr-2" />
                  <p className="d-inline">
                    {dateFormat(project.start_date, "mmm yyyy")} &ndash;{" "}
                    {project.end_date ? dateFormat(project.end_date, "mmm yyyy") : "present"}{" "}
                  </p>
                  <br />
                  <p className="mt-3">{project.summary}</p>
                </CardBody>
              </div>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default Dev;
