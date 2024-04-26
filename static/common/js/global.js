document.querySelector(".header-user").addEventListener("click", function() {
    document.querySelector(".header-slide").classList.add("is-shown")
})

document.querySelector(".header-slide-close").addEventListener("click", function() {
    document.querySelector(".header-slide").classList.remove("is-shown")
})