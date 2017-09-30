import 'whatwg-fetch';
/* eslint-disable no-console */

import getBaseURL from './baseURL';
const baseURL = getBaseURL();

export function getUsers(){
  return get('users');
}

export function delUser(id){
  console.log("userApi.js - delUser(url) called");
  return del(`users/${id}`);
}

function get(url){
  // console.log("userApi.js - get(url) called");
  return fetch(baseURL + url).then(onSuccess, onError);
}

function del(url){
  console.log("userApi.js - del(url) called");

  const request = new Request(baseURL + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(resp){
  return resp.json();
}

function onError(err){
  console.log(err); // eslint-disable-line no-console
}
