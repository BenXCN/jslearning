/*
import _numeral from 'numeral';
import './index.css'; // css file can not be in upper layer '../index.css', guess it is for security reason.

const myValue = _numeral(20000).format('$0,0.00');

console.log(`the test costs ${myValue}`); // eslint-disable-line no-console
// single line exception for eslint //
*/

import {getUsers} from './api/userApi';

getUsers().then(result =>{
  let userBody = "";

  result.forEach(user => {
    userBody+=`<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = userBody;
})
