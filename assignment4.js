// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {

  // Magic!
  console.log('Keepin\'n it clean with an external script!');

  // on keyboard press, trigger the predictive search
  $('.flexsearch-input').keyup(function(e) {

      var input = $('.flexsearch-input').val().toLowerCase();
      $('.flexsearch-predictions').empty();

     	// find the dictionary of predictive search items
     	var jqxhr = $.getJSON(" http://www.mattbowytz.com/simple_api.json?data=all", function( data ) {

  		 	for (var row in data) {
  				for (var col in data[row]) {
  					var possibleResults = data[row][col]; // predictive search items
  					for( var index in possibleResults) {
  						var current = possibleResults[index].toLowerCase();
  						if( current.startsWith(input) && input.length > 0 && current.length > 1) {
               			$('.flexsearch-predictions').append('<a href=https://www.google.com/#q=' + current + ' target="_blank">' + current + '</a><br>');
              }
            } // innermost for
          } // second for
  			} // outermost for

 		   })
       .done( function() {
         console.log("getJSON request successful. ")
       })
       .fail( function( jqxhr ) {
          console.log("getJSON request failed: " + jqxhr);
       })
       .always( function() {
         console.log("getJSON request attempted. ");
       });
       // End of JSON get

  }); // End of keyboard event handler

})();
