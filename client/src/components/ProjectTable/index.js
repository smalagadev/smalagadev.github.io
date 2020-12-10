import ProjectRow from './../ProjectRow';
import React from 'react';

class ProjectTable extends React.Component{
  render(){
    const rows = [];

    this.props.projects.forEach((project) => {
      rows.push(<ProjectRow project={project} />);
    });

    return(
      <>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" id="name-column">Name</th>
              <th scope="col" id="description-column">Description</th>
            </tr>
          </thead>
          <tbody id="project-list">
            {rows}
          </tbody>
        </table>
        <hr/>
      </>
    );
  }
}

export default ProjectTable;
