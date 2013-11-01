//signup.js 
// add your JavaScript code to this file

//onDocReady
//called when the document is ready for manipulation


$(function () {
 //document is now ready for manipulation

    var option;
    var idx;
    var state;
    var select = $('select[name= "state"]');
    for(idx = 0; idx < usStates.length; ++idx) {
    	state = usStates[idx];
 		option = $(document.createElement('option'));
 		option.attr('value', state.abbreviation);
   		option.html(state.name);
   		select.append (option);
	}
	$('.signup-form').submit(function(){

/*	var stateSelect = $('...appropriate css selector here...');
    
	var idx;
	var state;
	for (idx = 0; idx < usStates.length; ++idx) {
	    state = usStates[idx]; */
    //code to create new option element, populate, and append
	});
                

/*		var form = $(this);
		var select = form.find('select[name="state"]');
		var value = select.val();
		var valid = (null != value && value.length > 0);
		if(!valid) {
			alert("Please select a state!");			
		}
		return valid;
*/
	$('.cancel-signup').click(function(){
	    //code to run when user clicks "No Thanks!" button
		 window.location = 'http://google.com';
		 var addr1Input = signupForm.find('input[name="addr-1"]');
		 var addr1Value = addr1Input.val();
	}); //cancel-signup click

	$('select[name="refer"]').change(function(){
    //get a ref to the refer select
    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    }
	    else {
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
    }
}); //refer change function

});