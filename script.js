const btn = document.getElementById("btn");
const cards = document.querySelectorAll(".card-inner");
const exp = document.querySelectorAll(".expl");

if(btn) { //will run on the home page, will be skipped on the other pages
btn.addEventListener("click", 
    function(){
        window.location.href = "test.html";
});
}

cards.forEach(function(card){  //runs the flip animation when clicked
card.addEventListener("click", 
    function(){
        card.classList.toggle("is-flipped");
    });
});

exp.forEach(function(explore){  //opens the scale page
explore.addEventListener("click", 
    function(event){
        event.stopPropagation(); //stops the card from spinning once pressed
        window.location.href = "scale1.html";
    });
});