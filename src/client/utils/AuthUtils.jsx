export function userFromLocal() {
  return isAuthenticated() ? authFromLocal().user : {}
}

export function headerFromLocal() {
  return isAuthenticated() ? authFromLocal().header : {}
}

export function authFromLocal() {
  return JSON.parse(localStorage.getItem('auth'));
}

export function isAuthenticated() {
  return localStorage.getItem('auth');
}

export function authFromResponse(response) {
  const headers = response.headers;
  return JSON.stringify({
    user: response.data,
    header: {
      'access-token': headers['access-token'],
      'uid': headers['uid'],
      'client': headers['client']
    }
  });
}
