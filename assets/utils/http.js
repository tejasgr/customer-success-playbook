import axios from 'axios';

export function get(url) {
  let promise = axios.get(url);
  return promise;
}

export function post(url, payload) {
  let promise = axios.post(url, payload);
  return promise;
};