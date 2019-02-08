

var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var input = document.querySelector('input');
var p = document.querySelector('p');
p.textContent = 0
var count = 0;
// var input = 1;

document.getElementById("plus").addEventListener("click", addValue);
document.getElementById("minus").addEventListener("click", subValue);

function addValue () {
    count += parseInt(input.value)
    p.textContent = count
    console.log(p)

}
function subValue () {
    count -= parseInt(input.value)
    p.textContent = count

if (count < 0) 
document.querySelector("p").style.color = "red";
}



