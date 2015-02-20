;(function(){

// $( document ).ready(function() {

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				console.log("howdy pahdnah jajaja");
				// debugger
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)
// });
