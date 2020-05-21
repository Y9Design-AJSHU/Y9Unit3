//This is the function that is called whent the submit is clicked on the form.
function emailFunc() {
	//This assigns a variable to the form
	var x = document.getElementById("frm1");
	//This creates an array where all the form data will be stored
	var content = [];
	//Below, the variable i is created and a for loop takes all the elements of the form and puts it into the array called content.
	var i;
	for (i = 0; i < x.length; i++) {
		content.push(x.elements[i].value);
	}
	//Below, variables are created which represent each item in the content array (the checkbox variable is either true or false, depending on whether the box is clicked or not.
	var fullname = content[0];
	var email = content[1];
	var pn = content[2];
	var address = content[3];
	var sympt = content[4]
	var tc = document.getElementById('checkbox').checked
	
	//Below, variables are created which represent the length of each of the above variables
	var fnlength = fullname.length
	var elength = email.length
	var pnlength = pn.length
	var alength = address.length
	var slength = sympt.length
	
	//An if/else statement is created which checks if any of the form's elements were empty (if they were, it alerts the user to fill all fields.
	if (fnlength>0 && elength>0 && pnlength>0 && alength>0 && slength>0){
		//Below, the phone number and email are validated using REGEX
		function validatePN(){
			var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
			var returning = phoneRGEX.test(pn)
			return returning
		}
		function validateEmail() {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var returning = re.test(String(email).toLowerCase())
			return returning
		}
		//An if/else if/else state is created, and only if both the email and phone number are valid, may it continue. If either of them, or both of them are invalid, it will alert the user.
		if (validateEmail(email) && validatePN(pn)){
			//Here, all the variables are assigned to template params which are the paramaters within the email template that I created.
			var template_params = {
					"fullname": fullname,
					"email": email,
					"pn": pn,
					"address": address,
					"sympt": sympt,
					"telecall": tc
				}
				//The two variables represent what service the email is being sent with and what template is being used.
				var service_id = "default_service";
				var template_id = "form";
				//Here, the email is sent.
				emailjs.send(service_id, template_id, template_params);
				//Here, all the elements in the form are cleared.
				document.getElementById('address').value = "";
				document.getElementById('pn').value = "";
				document.getElementById('email').value = "";
				document.getElementById('fname').value = "";
				document.getElementById('sympt').value = "";
				document.getElementById("checkbox").checked = false
				//Here, the user is alerted that the firm was submitted successfully.
				alert("Successfully submitted. You will receive a confirmation email within 48 hours to confirm delivery.");		
		} else if (validateEmail(email) && !validatePN(pn)) {
			//If only the phone number is invalid
			alert("Please enter a valid phone number.");
			
			
		} else if (!validateEmail(email) && validatePN(pn)) {
			//If only the email is invalid
			alert("Please enter a valid email.");	
				
				
		} else if (!validateEmail(email) && !validatePN(pn)) {
			//If  the phone number and email are invalid
			alert("Please enter a valid phone number and a valid email.");	
			
			
		}
	} else {
		//If any fields of the form are empty
		alert("Please fill all fields.")
	}
}
