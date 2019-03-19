import { Container } from 'unstated';

function getAuthInfoFromCookies() {
  if (!document.cookie) return { email: '' };
  const cookieString = decodeURIComponent(document.cookie);
  const cookieArray = cookieString.split(';');
  const email = cookieArray[0].slice(cookieArray[0].indexOf('=') + 1);

  return { email };
}
export default class AppContainer extends Container {
  constructor () {
    super();
    const { email } = getAuthInfoFromCookies();

    this.state = {
      email
    }
  };

  isAuthenticated() {
    return this.state.email;
  }
}