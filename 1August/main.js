$(document).ready( function(){
    $('div').each( function(index, element){
      let n = $(this);
    //   console.log(n.text())
    //   console.log(  $(this).text());
    //   $('div')
      
    // console.log($(this).attr('class'));
    console.log($(this).css('background-color'));
     //DRY/ KISS / wyswyg / 
     // $('div')
    });


    // $('img').attr( {
    //     title: "Front End Developer",
    //     style: 'border: 2px dotted black;'
    // })
    // $('img').each(function(index,element){
    //     console.log($(this).attr('style'));
    // })
   
    //append()/appendTo()
    //prepend()/prependTo()
    //remove()

    // $('.class5').append(`<span> class-5 Content</span>`);
    // $(`<span> class-2 Content</span>`).appendTo('.class2');
    // $('div').append(' <strong>Multiple Append</strong>')
    // $('.class3').prepend('<strong>Prepend Example </strong>')
    //  $('<strong>Prepend Example </strong>').prependTo('div');

    // $('#header').wrap(' <header class="header__block" />')

    // $('.class2, .class4').remove();
 
    // $('div').css('color', 'blue');
    // $('div').css({
    //     'color' : 'blue',
    //     'font-weight' : 'bold',
    //     'font-size' : '40px'
    // })
    
    // $('div, h1').addClass('newClass');

    // if( $('h1').hasClass('newClass')){
        // console.log('h1 has a newClass')
        // $('h1').removeClass('newClass');
    // }
   
    // Jquery Event Shortcuts 
    /*
    click()
    blur()
    focus()
    mousemove()
    keydown()
    http://api.jquery.com/category/events/
    */

    // $('#header').click(function(event){
    //     console.log(event);
    //     $('#small_header').click()
    // })
    // $('#small_header').click(function(event){
    //     console.log('small_header was clicked')
    // })
    // $('#header').on('click mouseenter mouseleave', function(){
    //     console.log('Header Was clicked');
    //     $(this).toggleClass('entered');
    //     // $('#header').off('click');
        
    // })
    // $('div').on('click mouseenter mouseleave', function(){
    //     console.log('Header Was clicked');
    //     $(this).toggleClass('entered');
    //     // $('#header').off('click');
        
    // })

//    $('div').on({
//        mouseenter: function(){
//            $(this).addClass('entered');
//        },
//        mouseleave: function(){
//            $(this).removeClass('entered')
//        }
//    })
  
//    $('div').hover(
    //    function(){
        //    $(this).addClass('entered');
    //    },
    //    function(){
        //    $(this).removeClass('entered');
    //    }
//    )
  // localStorage
  // sessionStorage
  let storage = window.localStorage;

  $('#saveBtn').click(function(){
      let name = $('#name').val();
      let old = storage.getItem('userName');

      storage.setItem('userName', `${old} ${name}`);
       // storage.length
      //   console.log(storage.key(0));
    //    console.log(storage.getItem('userName'));
     
})
})