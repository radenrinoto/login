const togglePassword = document.querySelector('#togglePassword')
const password = document.querySelector('#password')
const imgElement = togglePassword.querySelector('img') // Dapatkan elemen img di dalam togglePassword

togglePassword.addEventListener('click', function (e) {
  e.preventDefault()
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password'
  password.setAttribute('type', type)
  if (type === 'password') {
    password.setAttribute('placeholder', '••••••••')
    imgElement.src = './assets/images/eye-password.svg' // Ganti src gambar dengan gambar mata terbuka
  } else {
    password.setAttribute('placeholder', 'Password')
    imgElement.src = './assets/images/eye-look.svg' // Ganti src gambar dengan gambar mata tertutup
  }
})
