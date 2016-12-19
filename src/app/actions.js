import { browserHistory } from 'react-router'

export function badRequest() {
  localStorage.removeItem('auth_token');
  browserHistory.push('/');
}
