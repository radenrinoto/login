function togglePasswordVisibility() {
  var passwordField = document.getElementById("passwordField");
  var toggleButton = document.getElementById("toggleButton");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.classList.remove("fa-eye");
    toggleButton.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    toggleButton.classList.remove("fa-eye-slash");
    toggleButton.classList.add("fa-eye");
  }
}
