// const container = document.querySelector('.container');
// const contentBox = document.querySelector('.content__box');
// const pElement = document.querySelector('p');

// container.addEventListener('click', function click(event){
//   console.log('container box');
// }, false)

// contentBox.addEventListener('click', function click(event){
//     console.log('contentBox Div');
// }, false)

// pElement.addEventListener('click', function click(event){
//     console.log('p Tag');
//     event.stopPropagation();
//     // event.stopImmediatePropagation();
// }, false)

// pElement.addEventListener('click', function click(event){
//     console.log('p Tag2');
// }, false)

// const myEvent = document.createEvent('CustomEvent');

// pElement.addEventListener('myCustomEvent', function(event){
//       console.log(event.detail);
// })

// contentBox.addEventListener('myCustomEvent', function(event){
//     console.log(event.detail);
// })

// const myCustomEventData = {
//     name: 'myCustomEvent',
//     id: 2018,
// }

// myEvent.initCustomEvent('myCustomEvent', true, false, myCustomEventData);

// pElement.dispatchEvent(myEvent);

// const table = document.querySelector('table');

// table.addEventListener('click', ({target}) => {
//     // debugger
//     let x = prompt('?');
//     if( x > 5){
//         console.log(target.textContent);
//     }
//     else {
//         target.textContent = x;
//     }
    // if( target.tagName.toLowerCase() === 'td'){
    //     console.log(target.textContent);
    // }
// })

// jQuery(document).ready( function (){
//     // DOM Loaded
//     alert("DOM");
// })

$(document).ready( function (){
    // DOM Loaded
    // alert("DOM");
    
    //   $(selectorExpression)
    
    // const  divElement = $('div,p');
    // console.log(divElement);

    // let trElements = $('table tr');
    // console.log(trElements);

    let customersDiv = $('#customersDiv');
    // console.log(customerDiv);

    // const wowClass = $('.wow');
    // console.log(wowClass);

    const multipleClasses = $('.content__box, wow');
    // console.log(multipleClasses);
    const table = $('table[border]');
    // console.log(table);
    
    const span = $('span:contains("Site")')
    // console.log(span);
    
    const oddTr = $('tr:odd');
    // console.log(oddTr);

    const evenTr = $('tr:even');
    // console.log(evenTr);

   evenTr.each( function(index, element){
    //    console.log($(this).html())
    this.title = `Current Index - ${index}`
   })

   let attrVal = customersDiv.attr('class');
   console.log(attrVal);    
})
