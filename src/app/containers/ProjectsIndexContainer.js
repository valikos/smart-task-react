import { connect } from 'react-redux'
import ProjectsIndex from '../pages/ProjectsIndex';

const mapStateToProps = ({ api: { projects = { data: [] } } }) => ({ projects });

export default connect(mapStateToProps)(ProjectsIndex);
