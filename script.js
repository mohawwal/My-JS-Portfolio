'use strict';

//Toggle Function
const elementToggleFunc = function(elem) {
    elem.classList.toggle("active")
}

const hamburgerBtn = document.querySelector(".blog-hamburger")
const navInfo = document.querySelector(".sidebar-info")
const sideBar = document.querySelector(".sidebar-info_more")
const sideBarCancelBtn = document.querySelector(".profile-cancel")
let isSideBarOpen = false



hamburgerBtn.addEventListener("click", () => {
    elementToggleFunc(sideBar)
    elementToggleFunc(navInfo)
    isSideBarOpen = true;
})

sideBarCancelBtn.addEventListener("click", () => {
    elementToggleFunc(sideBar)
    elementToggleFunc(navInfo)
    isSideBarOpen = false;
})

//nav disappear when an item is clicked

const navItems = document.querySelectorAll('.sidebar-info_more .navbar-link')

navItems.forEach((item) => {
    item.addEventListener('click', e => {
      elementToggleFunc(sideBar)
      elementToggleFunc(navInfo)
    })
})






//light and dark mode
const modeSection = document.querySelector('.mode-section')
const modeName = document.querySelector(".mode-text");
const modeIcon = document.querySelector(".fa-sun")
const body = document.querySelector("body")
let isDarkMode= false


const toggleMode = () => {
    isDarkMode = !isDarkMode
    if (isDarkMode) {
        modeIcon.classList.add('fa-moon');
        modeIcon.classList.remove('fa-sun');
        modeName.textContent = "Dark Mode"
        elementToggleFunc(body)
    } else {
        modeIcon.classList.add('fa-sun')
        modeIcon.classList.remove('fa-moon')
        modeName.textContent = "Light Mode"
        elementToggleFunc(body)
    }
}

modeSection.addEventListener('click', toggleMode)
modeSection.addEventListener('click', () => {
    elementToggleFunc(sideBar)
    elementToggleFunc(navInfo)
} )



//portfolio

const article = document.querySelector(".section-articles");
const menuListBtn = document.querySelector(".filter-select");
const menuList = document.querySelector(".select-list");
const projLists = document.querySelectorAll(".project-list");

const buttons = document.querySelectorAll(".select-item");

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener('click', e => {
        if (e.target.tagName !== "BUTTON" || e.target !== elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}

