export default function getBaseURL(){
  /*
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? "http://localhost:9091/" : "/";
  */
  /*
  * changes introduced in the production build section
  */
  return getQueryStringParameterByName('mockObj')?"http://localhost:9091/":"/";
}

function getQueryStringParameterByName(name, url){
  if (!url)
    url = window.location.href;

  name = name.replace(/[\[\]]/g,"\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);

  if(!results)
    return null;

  if(!results[2])
    return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
