function emailFunc() {
	console.log("hello");
	var x = document.getElementById("frm1");
	var content = [];
	var i;
	for (i = 0; i < x.length; i++) {
		content.push(x.elements[i].value);
		console.log(x.elements[i].value);
	}
	
	var fullname = content[0];
	var email = content[1];
	var pn = content[2];
	var address = content[3];
	var tc = document.getElementById('checkbox').checked
	
	console.log(content)
	console.log(fullname)
	console.log(email)
	console.log(pn)
	console.log(address)
	console.log(tc)
	var fnlength = fullname.length
	var elength = email.length
	var pnlength = pn.length
	var alength = address.length
	if (fnlength>0 && elength>0 && pnlength>0 && alength>0){
		function validatePN(){
			var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
			var returning = phoneRGEX.test(pn)
			return returning
			console.log(phoneRGEX.test(pn)+" --> PN");
		}

		function validateEmail() {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var returning = re.test(String(email).toLowerCase())
			return returning
		}
		
		if (validateEmail(email) && validatePN(pn)){
			console.log("both");
			var template_params = {
					"fullname": fullname,
					"email": email,
					"pn": pn,
					"address": address,
					"telecall": tc
				}

				var service_id = "default_service";
				var template_id = "form";
				emailjs.send(service_id, template_id, template_params);

				document.getElementById('address').value = "";
				document.getElementById('pn').value = "";
				document.getElementById('email').value = "";
				document.getElementById('fname').value = "";
				document.getElementById("checkbox").checked = false
				alert("Successfully submitted. You will receive a confirmation email within 48 hours to confirm delivery.");		
		} else if (validateEmail(email) && !validatePN(pn)) {
			console.log("jemail");
			alert("Please enter a valid phone number.");
			
			
		} else if (!validateEmail(email) && validatePN(pn)) {
			console.log("jphone");
			alert("Please enter a valid email.");	
				
				
		} else if (!validateEmail(email) && !validatePN(pn)) {
			console.log("neither");
			alert("Please enter a valid phone number and a valid email.");	
			
			
		}
	} else {
		alert("Please fill all fields.")
	}
}
