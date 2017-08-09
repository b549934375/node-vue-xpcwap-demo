document.addEventListener('DOMContentLoaded', fontSet , false);
  function fontSet(){
      var html = document.documentElement;
      var windowWidth = html.clientWidth;
      if(windowWidth){
        html.style.fontSize = Math.round((windowWidth >= 600 ? 375 : windowWidth) / 375 * 18) + 'px';
      }else{
        setTimeout(function(){
            fontSet();
        },50)
        
      }
  }