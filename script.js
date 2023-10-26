// Password Visible
const passwordVisible = () => {
    const password = document.getElementById('password')
    const iconShow = document.querySelector('.toggle-password')

    iconShow.addEventListener('click', () => {
        password.type = password.type === 'password' ? 'text' : 'password'

        document.addEventListener('DOMContentLoaded', passwordVisible);
    })
}