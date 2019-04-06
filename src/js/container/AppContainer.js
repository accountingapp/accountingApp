import { Container } from 'unstated';

function getAuthInfoFromCookies() {
  if (!document.cookie) return { email: '' };
  const cookieString = decodeURIComponent(document.cookie);
  const cookieArray = cookieString.split(';');
  const email = cookieArray[0].slice(cookieArray[0].indexOf('=') + 1);
  const userId = cookieArray[1].slice(cookieArray[1].indexOf('=') + 1);

  return { email, userId };
}
export default class AppContainer extends Container {
  constructor () {
    super();
    const { email, userId } = getAuthInfoFromCookies();

    this.state = {
      email,
      userId
    }
  };

  isAuthenticated() {
    return this.state.email;
  }
}