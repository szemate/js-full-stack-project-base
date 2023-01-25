import { ResponseError } from './errors';

export function get(url) {
  return fetchJSON('GET', url);
}

export function post(url, data) {
  return fetchJSON('POST', url, data);
}

export function put(url, data) {
  return fetchJSON('PUT', url, data);
}

export function patch(url, data) {
  return fetchJSON('PATCH', url, data);
}

export function del(url) {
  return fetchJSON('DELETE', url);
}

async function fetchJSON(method, url, requestData) {
  const params = {
    method,
    headers: { Accept: 'application/json' },
  };

  if (requestData) {
    params.headers['Content-Type'] = 'application/json';
    params.body = JSON.stringify(requestData);
  }

  const response = await fetch(url, params);
  const responseData = await response.json();

  if (!response.ok) {
    throw new ResponseError(responseData.message || 'Unknown Error');
  }

  return responseData;
}
