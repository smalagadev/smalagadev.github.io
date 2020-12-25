import Card from 'react-bootstrap/Card';

export default function ProjectCard(props){
  const project = props.project;

  return(
    <Card>
      <Card.Img variant="top" src={project.preview} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Card.Body>
          <Card.Link href={project.link}>Project</Card.Link>
          <Card.Link href={project.github}>Github</Card.Link>
        </Card.Body>
      </Card.Body>
    </Card>
  );
};
