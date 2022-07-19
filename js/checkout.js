// Exercise 6
function validate() {
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");


	// Validation letters & numbers 

	var errorNameNumbers = containsNumber(fName.value);
	var errorLastNameNumbers = containsNumber(fLastN.value);
	var errorPassword = containsNumber(fPassword.value);

	// Validate fields entered by the user: name, phone, password, and email

	if (fName.value == "" || fName.value.length < 3 || errorNameNumbers == true) {
		document.getElementById("fName").className += " is-invalid";

	} else {
		document.getElementById('fName').classList.remove('is-invalid');
		document.getElementById("fName").className += " is-valid";
	}

	if (fEmail.value == "" || fEmail.value.length < 3) {
		document.getElementById("fEmail").className += " is-invalid";

	} else {
		document.getElementById('fEmail').classList.remove('is-invalid');
		document.getElementById("fEmail").className += " is-valid";;
	}

	if (fAddress.value == "" || fAddress.value.length < 3 ) {
		document.getElementById("fAddress").className += " is-invalid";

	} else {
		document.getElementById('fAddress').classList.remove('is-invalid');
		document.getElementById("fAddress").className += " is-valid";

	}

	if (fLastN.value == "" || fLastN.value.length < 3 || errorLastNameNumbers == true) {
		document.getElementById("fLastN").className += " is-invalid";
	} else {
		document.getElementById('fLastN').classList.remove('is-invalid');
		document.getElementById("fLastN").className += " is-valid";
	}


	if (fPassword.value == "" || fPassword.value.length < 3 || errorPassword == false) {
		document.getElementById("fPassword").className += " is-invalid";
	} else {
		document.getElementById('fPassword').classList.remove('is-invalid');
		document.getElementById("fPassword").className += " is-valid";
	}

	if (fPhone.value == "" || fPhone.value.length < 9) {
		document.getElementById("fPhone").className += " is-invalid ";

	} else {
		document.getElementById('fPhone').classList.remove('is-invalid');
		document.getElementById("fPhone").className += " is-valid "
	}


}

function containsNumber(n) {
	return /[0-9]/.test(n);
}

