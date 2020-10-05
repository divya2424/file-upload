/*
 * @Author: Divya
 * @Date: 2020-03-20 11:25:10
 * @Last Modified by: Divya
 */

const global = {
  regex: {
    email: /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
  },
  userType: {
    staff: "staff",
    admin: "admin",
    superUser: "super_user",
  },
};

export default global;
