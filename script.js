var input1 = document.querySelector(".color1")
var input2 = document.querySelector(".color2")
var body = document.querySelector("body");

input1.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value +")"
})

input2.addEventListener("input", function() {
    body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value +")"
})