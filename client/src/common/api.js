/*
 * @Author: Guru
 * @Date: 2018-02-28 16:50:42
 * @Last Modified by: Pulkit Aggarwal
 */
const baseURL = "http://localhost:3001";

// import Config from '@/Common/Config';

const URLS = {
  postFile: `${baseURL}/api/postFile`,
  getFiles : `${baseURL}/api/getFiles`,
  removeFile : `${baseURL}/api/removeFile`,
  filePath : `${baseURL}/ftp/uploads/`,
};

export default URLS;
