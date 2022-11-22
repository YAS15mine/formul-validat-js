
const form = document.getElementById('form');
const prenom= document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const telph = document.getElementById('telph');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	const nomValue = nom.value.trim();
	const prenomValue = prenom.value.trim();
	const emailValue = email.value.trim();
	const telphValue = telph.value.trim();

	if (prenomValue === '') {
		setErrorFor(prenom, 'First name is required');
      
	} else if(prenom.value.length<=2|prenom.value.length>30 ) {
		setErrorFor(prenom, 'First name is invalid');
	}
		else {
		setSuccessFor(prenom, 'Looks Good!');
      
	}
	if ( nomValue === '') {
		setErrorFor( nom, 'Last name is required');
	} else if(nom.value.length<=2|nom.value.length>30 ) {
		setErrorFor(nom, 'le nom is invalid');
	} else {
		setSuccessFor( nom, 'Looks Good!');
	}
	
	if (emailValue === '') {
		setErrorFor(email, 'Email is required');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email, 'Looks Good!');
	}
	if ( telphValue  === '') {
		setErrorFor( telphValue , 'Phone number is required');
	} else if (!istelph( telphValue )) {
		setErrorFor( telph , 'Not a valid phone number');
	} else {
		setSuccessFor( telph, 'Looks Good!');
	}
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'inputbox-error';
	small.innerText = message;
}
function setSuccessFor(input, message) {
	const formControl = input.parentElement;
	const samp = formControl.querySelector('small');
	formControl.className = 'inputbox-success';
	samp.innerText = message;
}
function isEmail(email) {
	return /^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/.test(email);
}
function istelph(telph) {
	var phoneRe = /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/;
	return phoneRe.test(telph);
}


function validate(){
	let checkbox=document.querySelectorAll('input[type="checkbox"]');
	let chosencheckboxes = [];
	let text=document.getElementById("confirm");
	text.innerHTML=" ";
	 checkbox.forEach((check_box) => { 
		if(check_box.checked){
			chosencheckboxes.push(check_box);
		}
	});
	if (chosencheckboxes.length>=2 && chosencheckboxes.length <=3){

		text.innerHTML+="Looks Good !!";
		text.style.color="green";
	}
	else{
		text.innerHTML += "Pleaze You must chose Max 3 Options !!!";
		text.style.color="red";
	}
}


