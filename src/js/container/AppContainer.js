import { Container } from 'unstated';

function getAuthInfoFromCookies() {
  if (!document.cookie) {
    return { email: '' };
  }
  const cookieString = decodeURIComponent(document.cookie);
  const cookieArray = cookieString.split('; ');
  const email = cookieArray[1].slice(cookieArray[1].indexOf('=') + 1);
  return { email };
}

export default class AppContainer extends Container {
  constructor () {
    super();
    const { email } = getAuthInfoFromCookies();

    this.state = {
      email
    }
    this.updateAuthenticationStatus = this.updateAuthenticationStatus.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  };

  updateAuthenticationStatus() {
    const { email } = getAuthInfoFromCookies();
    this.setState({
      email
    });
  }

  isAuthenticated() {
    return this.state.email;
  }
}