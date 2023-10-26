function lihat() {
  var password = document.getElementById("password"),
    button = document.getElementById("password-toggle");

  if (button.textContent === "Lihat Password") {
    password.setAttribute("type", "text");
    button.textContent = "Sembunyikan";
  } else {
    password.setAttribute("type", "password");
    button.textContent = "Lihat Password";
  }
  return false;
}
