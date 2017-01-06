import { connect } from 'react-redux';
import React, { Component } from 'react';
import ProjectItem from './ProjectItem.react';
import { Container, Segment, Header, Dimmer, Loader } from 'semantic-ui-react';
import { fetchProjects } from '../actions';

const mapStateToProps = (state) => {
  const isFetching = state.projects.get('isFetching');
  const { api: { projects = { data: [] } } } = state;

  return {
    projects,
    isFetching
  }
}

class ProjectList extends Component {

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchProjects());
  }

  renderProjects() {
    const { projects, isFetching } = this.props;

    const project_list = projects.data.map(project => <ProjectItem key={project.id} project={project} />);

    if (isFetching) {
      return (
        <Segment style={{ height: 175 }}>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
        </Segment>
      );
    }

    if (!project_list.length) {
      return <Header as='h2' block textAlign='center' content='Please add project to manage your processes' />
    }

    return project_list;
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
