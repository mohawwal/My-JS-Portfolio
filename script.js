'use strict';

//Toggle Function
const elementToggleFunc = function(elem) {
    elem.classList.toggle("active")
}

const hamburgerBtn = document.querySelector(".blog-hamburger")
const navInfo = document.querySelector(".sidebar-info")
const sideBar = document.querySelector(".sidebar-info_more")
const article = document.querySelector(".section-articles")
const sideBarCancelBtn = document.querySelector(".profile-cancel")
let isSideBarOpen = false


hamburgerBtn.addEventListener("click", () => {
    elementToggleFunc(sideBar)
    isSideBarOpen = true;
})

sideBarCancelBtn.addEventListener("click", () => {
    elementToggleFunc(sideBar)
    isSideBarOpen = false;
})

article.addEventListener("click", () => {
    if (isSideBarOpen) {
        elementToggleFunc(sideBar);
        isSideBarOpen = false
    }
})


const user = document.querySelector(".user-icon")

user.addEventListener("click", () => {
    elementToggleFunc(sideBar)
    isSideBarOpen = true;
})

//light and dark mode
const lightMode = document.querySelector(".sun-mode");
const darkMode = document.querySelector(".moon-mode")
const body = document.querySelector("body")


darkMode.addEventListener("click", () => {
    elementToggleFunc(body)
})

//portfolio
const menuListBtn = document.querySelector(".filter-select")
const menuList = document.querySelector(".select-list")
const projList = document.querySelector(".project-list")
let listDown = false

menuListBtn.addEventListener("click", function() {
    elementToggleFunc(menuList)
    listDown = true
    if (listDown === true) {
        elementToggleFunc(projList)
    }
})


