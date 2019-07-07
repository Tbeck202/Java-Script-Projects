// Modal
var  modal = document.getElementById('modal');

var modalBtn = document.getElementById('orderbtn');

var closeBtn = document.getElementById('closebtn');

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function clickOutside(e){
    if (e.target == modal){
    modal.style.display = 'none';
    }
}
// End Modal

var runningTotal = 0;
var sizeTotal = 0;
var sizeArray = document.getElementsByClassName("size");

for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
    }
}

