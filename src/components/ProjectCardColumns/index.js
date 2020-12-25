import ProjectCard from './../ProjectCard';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default function ProjectTable(props){
  const rows = [];

  props.projects.forEach((project) => {
    rows.push(<ProjectCard project={project} />);
  });

  return(
    <CardColumns>
      {rows}
    </CardColumns>
  );
}
