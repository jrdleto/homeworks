$(document).ready(function (){
    // $('h1').myPlugin();
    // $('h1').myPlugin2();
 $('h1')
 .styleElement({
     text: 'Hello Plugin',
     color: 'green',
     fontSize: '25px',
 })
 
 let worker = new Worker('work.js');
 worker.postMessage('Hello my worker!...')
     worker.terminate();
 worker.addEventListener('message', (event) =>{
     console.log(event.data);
 
 })
 });