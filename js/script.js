document.getElementById("collapse_button").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("nav-collapsed")
    document.querySelector("main").classList.toggle("main-collapsed")
    document.querySelector("header").classList.toggle("header-collapsed")
    document.querySelector(".collapsible").classList.toggle("collapsible-collapsed")
})