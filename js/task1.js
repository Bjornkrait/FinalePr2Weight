const btnOpen = document.querySelector(".btn--open");
const modal = document.querySelector(".modal")
const btnClose = document.querySelector(".btn--close")

const modalViewHandler = () => {
    modal.classList.toggle('modal--open'); //переключает
}

btnOpen.addEventListener('click', modalViewHandler)
btnClose.addEventListener('click', modalViewHandler)

