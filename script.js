const btn = document.getElementById("btn");
const card = document.querySelector(".manufacturer-card");

btn.addEventListener("click", 
    function(){
        window.location.href = "test.html";
});
card.addEventListener("click", 
    function(){
        card.classList.toggle("flipped");
    });