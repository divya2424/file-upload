import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./constant";
import "isomorphic-fetch";
import URLS from "../../common/api";

// Action Creators
const showLoader = () => ({ type: SHOW_LOADER });
const hideLoader = () => ({ type: HIDE_LOADER });
const receivedEvent = (files) => ({ type: FETCH_DATA_SUCCESS, payload: files });
const eventError = () => ({ type: FETCH_DATA_FAILURE });

export const fetchFiles = () => (dispatch, getState) => {
  dispatch(showLoader());
  return fetch(URLS.getFiles)
    .then((response) => {
      dispatch(hideLoader());
      if(response && response.fileArr){
        dispatch(receivedEvent(response.fileArr));
        
      }
      
    })
    .catch((err) => {
      dispatch(hideLoader());
      dispatch(eventError(err));
    });
};




export const removeFile = (data) => (dispatch, getState) => {
  dispatch(showLoader());
  return fetch(URLS.removeFile, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)})
    .then((responseJson) => {
      dispatch(hideLoader());
      if(responseJson && responseJson.fileArr){
        dispatch(receivedEvent(responseJson.fileArr));
      }
    })
    .catch((err) => {
      dispatch(hideLoader());
      dispatch(eventError(err));
    });
};