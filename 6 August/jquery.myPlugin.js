// BAD
// $.fn.myPlugin = function(){
//     console.log('My Plugin');
// }

// (function($){
//   $.fn.myPlugin = function(){
//       console.log('Myplugin 2nd Way');
//   }
// })(jQuery)

// (function($){
//     $.extend($.fn, {
//         myPlugin(){
//             console.log('MyPlugin 2nd Way');
//         },
//         myPlugin2(){
//             console.log('MyPlugin 2nd Way')
//         }
//     })
// })(jQuery);

(function($){
  $.fn.styleElement = function(options){

    let config = $.extend( {
       text: 'Styleelement Default text',
       color: 'blue',
       fontStyle: null,
       fontSize:  '16px',
       backgroundColor: 'purple',
       padding: '10px',
    }, options)

    return this.each(function(){

      $(this).text(config.text);
      if(config.color){
          $(this).css('color', config.color);
      }
      if(config.fontStyle){
        $(this).css('font-style', config.fontStyle);
    }
    if(config.backgroundColor){
        $(this).css('background-color', config.backgroundColor);
    }
    if(config.fontSize){
        $(this).css('font-size', config.fontSize);
    }
    if(config.padding){
        $(this).css('padding', config.fontSize);
    }
     })
  }
})(jQuery);