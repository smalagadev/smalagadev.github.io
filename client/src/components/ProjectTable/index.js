import ProjectRow from './../ProjectRow';
import React from 'react';
import Table from 'react-bootstrap/Table';

class ProjectTable extends React.Component{
  render(){
    const rows = [];

    this.props.projects.forEach((project) => {
      rows.push(<ProjectRow project={project} />);
    });

    return(
      <>
        <Table variant="dark">
          <thead>
            <tr>
              <th scope="col" id="name-column">Name</th>
              <th scope="col" id="description-column">Description</th>
            </tr>
          </thead>
          <tbody id="project-list">
            {rows}
          </tbody>
        </Table>
      </>
    );
  }
}

export default ProjectTable;
