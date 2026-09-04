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

const manufacturers = {
    Airfix: {
        scales: ["1:1", "1:8", "1:12", "1:16", "1:20", "1:24", "1:32", "1:35", "1:43", "1:48", "1:72",
             "1:76", "1:87",  "1:100", "1:130", "1:144", "1:180", "1:350", "1:400", "1:600", "1:700", "1:1200"]
        }
    Tamiya: {
        scales: [ ]
        }

    }
