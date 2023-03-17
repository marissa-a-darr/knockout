/* eslint-disable import/no-anonymous-default-export */
class AuthService {
  loggedIn() {
    const loggedIn = localStorage.getItem('loggedIn');
    console.log(typeof loggedIn, loggedIn);
    return loggedIn === 'true';
  }

  login() {
    localStorage.setItem('loggedIn', true);
    window.location.assign('/login');
  }

  logout() {
    localStorage.setItem('loggedIn', false);
    window.location.assign('/');
  }
}

export default new AuthService();
