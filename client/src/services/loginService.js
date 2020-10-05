import URLS from "../common/api";
import http from "../interceptor";

export default {
  login: (params) => http.post(URLS.login, params),
};
