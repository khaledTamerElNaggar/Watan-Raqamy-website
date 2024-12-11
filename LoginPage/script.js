function myMenuFunction() {
  var navMenu = document.getElementById("navMenu");
  if (navMenu.className === "nav-menu") {
      navMenu.className += " responsive";
  } else {
      navMenu.className = "nav-menu";
  }
}

function registerUser() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var jobTitle = document.getElementById('jobTitle').value;
  var phoneNumber = document.getElementById('phoneNumber').value;

  if (firstName && lastName && email && jobTitle && phoneNumber ) {
      var messageDiv = document.getElementById('registrationMessage');
      messageDiv.innerHTML = `<p>Thanks for your registration, ${firstName}!</p>`;
      messageDiv.style.color = 'white';
      messageDiv.style.fontSize = '20px';
      messageDiv.style.textAlign = 'center';
      messageDiv.style.paddingTop = '20px';

      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('jobTitle').value = '';
      document.getElementById('phoneNumber').value = '';
      document.getElementById('facebook').value = '';
      document.getElementById('linkedin').value = '';
  }
}
