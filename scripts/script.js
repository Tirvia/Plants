var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-list');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

var buttons1 = document.getElementById("Gardens");
var buttons2 = document.getElementById("Lawn");
var buttons3 = document.getElementById("Planting");
var but1 = document.getElementById("gardens1");
var but5 = document.getElementById("gardens2");
var but2 = document.getElementById("planting1");
var but3 = document.getElementById("lawn");
var but4 = document.getElementById("planting2");
var but6 = document.getElementById("planting3");


buttons1.addEventListener('click', function(){
    buttons1.classList.toggle('active');
	  but1.classList.toggle('active');
    but5.classList.toggle('active');
});
buttons2.addEventListener('click', function(){
  buttons2.classList.toggle('active');
  but3.classList.toggle('active');
});
buttons3.addEventListener('click', function(){
  buttons3.classList.toggle('active');
  but2.classList.toggle('active');
  but4.classList.toggle('active');
  but6.classList.toggle('active');
});