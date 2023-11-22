function validateInputs() {
  var fullname = document.MyForm.fullname.value;
  var email = document.MyForm.email.value;
  var phone = document.MyForm.phone.value;

  // Check for blank fields
  if (fullname === '' || email === '' || phone === '') {
      alert("All fields are mandatory. Please complete the form.");
      return false;
  }

  // Email validation
  var emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!emailFilter.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

  // Phone number validation: only numbers and dashes
  var phoneFilter = /^[\d-]+$/;
  if (!phoneFilter.test(phone)) {
      alert("Please enter a valid phone number (only numbers and dashes).");
      return false;
  }

  // Sanitization
  fullname = fullname.replace(/[^a-z0-9\s\-]/gim, "").trim();
  email = email.replace(/[^a-z0-9_@.-]/gim, "").trim();
  phone = phone.replace(/[^0-9-]/gim, "").trim();

  // Submit form
  document.MyForm.submit();
}