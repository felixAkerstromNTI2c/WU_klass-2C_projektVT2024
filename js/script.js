const burger =document.getElementById('burger')
function toggleMenu() {
    document.getElementById('link_list').classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}
burger.addEventListener('click', toggleMenu)