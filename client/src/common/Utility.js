import Global from "./global";
export default {
  /**
   * function for storing the data in localStorage
   */
  setData: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },

  /**
   * function for getting the data from localStorage
   */
  getData: (key) => JSON.parse(localStorage.getItem(key)),

  /**
   * function for clearing particular key from localStorage
   */
  clearData: (key) => {
    localStorage.removeItem(key);
  },

  /**
   * function for clearing all data from localStorage
   */
  clearAllData: () => {
    localStorage.clear();
  },

  isLogin: () => {
    // fakeAuth = true;
    return false;
  },
};
