import { Card, CardContent, Typography } from '@mui/material';

export default function Projects() {
  return (
    <section id="projects">
      <Typography variant="h2">Key Projects</Typography>
      {userData.projects.map((project) => (
        <Card key={project.id} className="project-card">
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography>{project.description}</Typography>
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <Typography color="success.main">{project.metrics}</Typography>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}