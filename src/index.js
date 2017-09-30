/*
import _numeral from 'numeral';
import './index.css'; // css file can not be in upper layer '../index.css', guess it is for security reason.

const myValue = _numeral(20000).format('$0,0.00');

console.log(`the test costs ${myValue}`); // eslint-disable-line no-console
// single line exception for eslint //
*/

import {getUsers, delUser} from './api/userApi';

getUsers().then(result =>{
  let userBody = "";
  console.log("index.js getUsers().then called");


  /*
   * herf="#" means the link is referencing to the top of the page.
   * Personally I guess this is a technique to catch the user click event without
   * taking the users out from the page, and without causing a refresh.
   */
  result.forEach(user => {
    userBody+=`<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">DEL</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = userBody;
  // debugger; // eslint-disable-line no-debugger

  const deleteLinks = global.document.getElementsByClassName("deleteUser");

  // console.log(`index.js - deleteLinks = ${deleteLinks}`);

  // must use Array.from to create a real array from a DOM collection
  // getElementByClassName only returns an "array-like" object

  // BX: Make sure it is link.onclick instead of link.onClick!!!!
    Array.from(deleteLinks, link => {
    link.onclick = function(event){
      const element = event.target;
      event.preventDefault();
      delUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
      console.log(`index.js - id = ${element.attributes["data-id"].value} on call function hit`);
    };
    console.log(`index.js - link = ${link}, data-id= ${link.attributes["data-id"].value}`);
  });
});
