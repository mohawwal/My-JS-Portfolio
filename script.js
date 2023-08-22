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
const modeIcon = document.querySelector(".fa-moon")
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
const article = document.querySelector(".section-articles")
const menuListBtn = document.querySelector(".filter-select");
const menuList = document.querySelector(".select-list");
const menuListItems = document.querySelectorAll(".select-list .select-item");
const projList = document.querySelector(".project-list");
const projectItem = document.querySelectorAll(".project-list .project-item")
let listDown = false;


const menu = () => {
    elementToggleFunc(menuList);
    listDown = true;
    if (listDown === true) {
        elementToggleFunc(projList);
    } 
}


menuListBtn.addEventListener("click", menu);

menuListItems.forEach((list) => {
    list.addEventListener('click', () => {
        menu()
    })
})






