export function getUserLoginStatus(status) {
  return { type: 'loginResponse', payload: status };
}

export function getUserData() {
  return { type: 'getData' };
}

export function getUserInformation(userInformation) {
  return { type: 'getUserInformation', payload: userInformation };
}
