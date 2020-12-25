import React from 'react';

class ProjectRow extends React.Component {
  render(){
    const project = this.props.project;
    return(
      <tr>
        <td>{project.name}</td>
        <td>{project.description} Visit the <a href={project.link}>project</a> or the <a href={project.github}>repository</a>.</td>
      </tr>
    );
  }
}

export default ProjectRow;
