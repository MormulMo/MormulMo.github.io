$(document).ready(function(e) {
        

        //alert('Привет')

        

        $('.button-hire-me').click(function() {

        	$('.button-hire-me').addClass('button-hire-me-bg');
        });


        $('.menu_close').click(
        	function(){
        		$('.header_aside').hide(300);
        	}
        	);
        $('.button-menu').click(
        	function(){
        		$('.header_aside').show(300);
        }
        );

        $('.list_menu').click(
        	function(){
        		$('.header_aside').hide(300);

        	}
        	);

        $('.list_menu a').click(function(){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
     $('html, body').animate({
         scrollTop: destination
     }, 1000);
 });
        
        $('.button-hire-me').mouseenter(
        	function(){
        		$('.tooltip').show(300);

        	}
        	);
        $('.button-hire-me').mouseout(
        	function(){
        		$('.tooltip').hide(300)
        	}
        	);
        $( function() {
    $( "#accordion" ).accordion(300);
  } );
         $( function() {
    $( "#tabs" ).tabs();
  } );

});