const decreasebtn = document.getElementById("decreasebtn");
const emptybtn = document.getElementById("emptybtn");
const increasebtn = document.getElementById("increasebtn");
const counter = document.getElementById("counter");

let count = 0 ; 

increasebtn.onclick = function() {
    count++;
    counter.textContent = count;
}

emptybtn.onclick = function() {
    count = 0 ;
    counter.textContent = count;
}
    
decreasebtn.onclick = function(){
    count--;
    counter.textContent = count;
}
  