import {expect} from 'chai';
import bjsdom from 'jsdom';
import fs from 'fs';

describe('First Test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', ()=>{
  it('should say journey', (done)=>{
    const bindex = fs.readFileSync('./src/index.html',"utf-8");
    bjsdom.env(bindex, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      //expect(h1.innerHTML).to.equal("/*Journey/");
      expect(h1.innerHTML).to.include("Journey");
      done();
      window.close();
    });
  })
})
