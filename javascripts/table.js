
    
    $(document).ready(function(){
      //Fix tabs content position
      fixContentPosition();
      $(window).resize(function(){fixContentPosition()});
    });
    
    function fixContentPosition() {
      if ($('table').is(':visible')) {
        $('table').height($(window).height()-162);
      } else {
        $('div#map').height($(window).height()-162);
      }
    }
    
    
    function changeTo(ev,kind){
      ev.stopPropagation();
      ev.preventDefault();
      
      if (kind=="table") {
        if (!$('table').is(':visible')) {
          $("ul.tab_menu li").removeClass('selected');
          $("ul li a:contains('Table')").parent().addClass('selected');
          $('table').toggle();
          $('div#map').toggle();
          fixContentPosition()
        }
      } else {
        if (!$('div#map').is(':visible')) {
          $("ul.tab_menu li").removeClass('selected');
          $("ul li a:contains('Map')").parent().addClass('selected');
          $('table').toggle();
          $('div#map').toggle();
          
          if ($('div#map svg').size()==0) {
            $('div#map').append('<script type="text/javascript" src="/javascripts/application.js"></script>');
          }
          
        }
      }
      
    }