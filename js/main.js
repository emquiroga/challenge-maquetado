function toggleMenu() {
    const BUTTON = document.getElementById('burger-button')
    const MENU = document.getElementById('menu-burger')
    console.log('working')
    BUTTON.addEventListener('click', () => {
        MENU.classList.toggle('show')
    })
}
toggleMenu();