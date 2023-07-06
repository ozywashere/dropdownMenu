const dataToggler = document.querySelectorAll('[data-toggler]')
const profileMenu = document.querySelector('.profile-menu')
const links = document.querySelectorAll('.list-link')
const overlay = document.querySelector('[data-overlay]')

dataToggler.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    profileMenu.classList.toggle('active')
    overlay.classList.toggle('active')
  })
})
