import URLS from "../common/api";
import http from "../interceptor";

export default {
  getUsers: (params) => http.post(URLS.userList, params),
  //   countryData: () => http.get(URLS.countryData),
};
