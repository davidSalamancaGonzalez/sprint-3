// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "") {
		error++;
	}

	if (fEmail.value == "") {
		error++;
	}

	if (fAddress.value == "") {
		error++;
	}

	if (fLastN.value == "") {
		error++;
	}

	if (fPassword.value == "") {
		error++;
	}

	if (fPhone.value == "" || fPhone.length < 9) {
		error++;
	}

	// if (error > 0) {
	// 	alert("Error");
	// } else {
	// 	alert("OK");
	// }

}

(function () {
	'use strict'
	const forms = document.querySelectorAll('.requires-validation')
	Array.from(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()