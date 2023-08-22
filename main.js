const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

const handleMenu = () => {
    openMenu.classList.add('hidden');
    closeMenu.classList.remove('hidden')
    closeMenu.classList.add('block')
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
}

const handleClose = () => {
    closeMenu.classList.remove('block')
    closeMenu.classList.add('hidden')
    openMenu.classList.remove('hidden');
    openMenu.classList.add('block');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
}

openMenu.addEventListener("click", handleMenu );

closeMenu.addEventListener("click", handleClose );

