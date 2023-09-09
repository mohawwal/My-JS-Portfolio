'use strict';

//Toggle Function
const elementToggleFunc = function(elem) {
    elem.classList.toggle("active")
}

const hamburgerBtn = document.querySelector(".blog-hamburger")
const navInfo = document.querySelector(".sidebar-info")
const sideBar = document.querySelector(".sidebar-info_more")
const sideBarCancelBtn = document.querySelector(".profile-cancel")




hamburgerBtn.addEventListener("click", () => {
    elementToggleFunc(sideBar)
    elementToggleFunc(navInfo)
})

sideBarCancelBtn.addEventListener("click", () => {
    elementToggleFunc(sideBar)
    elementToggleFunc(navInfo)
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


function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener('click', e => {
        if (e.target.tagName !== "BUTTON" || e.target !== elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}



const menuList = document.querySelectorAll(".select-list li .select-item");
const projLists = document.querySelectorAll(".project-list li");


const projects = (e) => {
    projLists.forEach(proj => {
        // show the proj if it matches the clicked filter or show all proj if "all" filter is clicked
        if(proj.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return proj.classList.replace("hide", "show");
        }
        proj.classList.add("hide");
    });
}

menuList.forEach(button => button.addEventListener("click", projects));
