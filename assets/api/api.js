import * as http from '../utils/http';

var baseUrl = "/api/v1/";

export function getAccountList() {
  // api/v1/accounts
  var url = baseUrl + "accounts";
  return http.get(url);
}
