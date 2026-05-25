const tabLinks = document.querySelectorAll(".tablinks")
const tabContent = document.querySelectorAll(".tabcontent")

tabLinks.forEach((elm) => {
    elm.addEventListener('click', openTabs)
});

function openTabs(evt) {
    const btnTarget = evt.currentTarget;
    const day = btnTarget.getAttribute('data-day');

    tabContent.forEach((i) => {
        i.classList.remove('tabcontent-active')
    })
    tabLinks.forEach((j) => {
        j.classList.remove('tablinks-active')
    })

    document.querySelector(`#${day}`).classList.add("tabcontent-active");
    btnTarget.classList.add("tablinks-active")
}