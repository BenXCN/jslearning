import 'whatwg-fetch';

export function getUsers(){
  return get('users');
}

function get(url){
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(resp){
  return resp.json();
}

function onError(err){
  console.log(err); // eslint-disable-line no-console
}
