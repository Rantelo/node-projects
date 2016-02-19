import axios from 'axios';

export const FETCH_CONTRIBUTORS = 'FETCH_CONTRIBUTORS';
export const FETCH_CONTRIBUTORS_VERSION = 'FETCH_CONTRIBUTORS_VERSION';
export const CHANGE_VERSION = 'CHANGE_VERSION';
export const CHANGE_TEAM = 'CHANGE_TEAM';

const ROOT_OTHER = 'http://project-stats-api.herokuapp.com/contributors';

export function fetchContributors() {
  const request = axios.get(`${ROOT_OTHER}`);

  return {
    type: FETCH_CONTRIBUTORS,
    payload: request
  };
}

export function fetchContributorsVersion(version) {
  const request = axios.get(`${ROOT_OTHER}/v/${version}`);

  return {
    type: FETCH_CONTRIBUTORS_VERSION,
    payload: request
  };
}

export function changeVersion(version) {
  return {
    type: CHANGE_VERSION,
    payload: version
  };
}

export function changeTeam(team) {
  return {
    type: CHANGE_TEAM,
    payload: team
  };
}
