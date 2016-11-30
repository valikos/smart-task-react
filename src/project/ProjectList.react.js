import { connect } from 'react-redux';
import React, { Component, PropTypes as RPT } from 'react';
import Project from './Project.react';
import { Container } from 'semantic-ui-react';

class ProjectList extends Component {

  static propTypes = {
    projects: RPT.any
  };

  renderProjects() {
    const { projects } = this.props;

    return projects.map(project => (<Project entity={project} />));
  }

  render() {
    return (
      <Container>
        { this.renderProjects() }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(
  mapStateToProps
)(ProjectList);
