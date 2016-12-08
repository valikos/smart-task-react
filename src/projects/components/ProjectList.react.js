import { connect } from 'react-redux';
import React, { Component } from 'react';
import ProjectItem from './ProjectItem.react';
import { Container } from 'semantic-ui-react';
import { fetchProjects } from '../actions';

const mapStateToProps = ({ api: { projects = { data: [] } } }) => ({ projects });

class ProjectList extends Component {

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchProjects());
  }

  renderProjects() {
    const { projects } = this.props;

    return projects.data.map(project => (<ProjectItem key={project.id} project={project} />));
  }

  render() {
    return (
      <Container>
        { this.renderProjects() }
      </Container>
    );
  }
}

export default connect(mapStateToProps)(ProjectList);
