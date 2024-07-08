// acordion open/close logic

const acordions = document.getElementsByClassName("accordion__card")

for (let accordion of acordions) {
    accordion.addEventListener("click", () => {
        const accordionContent = accordion.lastElementChild

        const accordionIsActive = accordionContent.classList.contains("active");

        if (accordionIsActive) {
            accordionContent.classList.remove("active")
            accordion.childNodes[1].childNodes[3].src = "./img/assets/plus.svg"
            return
        }

        accordionContent.classList.add("active")
        accordion.childNodes[1].childNodes[3].src = "./img/assets/lessicon.svg"

    })
}

// scroll

const allOptions = document.querySelectorAll(".header__list__item")
const hstart = document.querySelector("#hstart")
const hbenefits = document.querySelector("#hbenefits")
const hhowitworks = document.querySelector("#hhowitworks")
const hfaq = document.querySelector("#hfaq")
const hpartners = document.querySelector("#hpartners")

const getPositionY = () => {
    const scrollY = window.pageYOffset

    allOptions.forEach((item) => {
        item.classList.remove("active")
    })

    if (scrollY >= 0 && scrollY < 680) {
        hstart.classList.add("active")
    }
    else if (scrollY >= 680 && scrollY < 2875) {
        hbenefits.classList.add("active")
    }
    else if (scrollY >= 2875 && scrollY < 3533) {
        hhowitworks.classList.add("active")
    }
    else if (scrollY >= 3533 && scrollY < 4135) {
        hfaq.classList.add("active")

    } else {
        hpartners.classList.add("active")
    }

}

window.addEventListener("scroll", getPositionY)

// sidebar on and off

const sidebarButton = document.querySelector("#sidebarButton")
const headerNavigation = document.querySelector(".header__nav")

const hasAlreadyActive = Array.from(headerNavigation.classList)
const iconImg = sidebarButton.childNodes[1]

sidebarButton.addEventListener("click", () => {

    const hasAlreadyActive = Array.from(headerNavigation.classList)


    if (hasAlreadyActive.includes("mobile__active")) {
        headerNavigation.classList.remove("mobile__active")
        iconImg.src = "./img/assets/sidebaricon.svg"
    } else {
        console.log("teste2")
        headerNavigation.classList.add("mobile__active")
        iconImg.src = "./img/assets/closeicon.svg"
    }


})

allOptions.forEach((item) => {
    item.addEventListener("click", () => {
        headerNavigation.classList.remove("mobile__active")
        iconImg.src = "./img/assets/sidebaricon.svg"
    })
})