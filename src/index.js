import _numeral from 'numeral';
import './index.css'; // css file can not be in upper layer '../index.css', guess it is for security reason.

const myValue = _numeral(20000).format('$0,0.00');
console.log(`the test costs ${myValue}`);
