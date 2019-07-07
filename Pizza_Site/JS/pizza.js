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

/* Update Order text */
function printInvoice(){
    var items=document.getElementsByName('size');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='radio' && items[i].checked==true)
            selectedItems+=items[i].value+"\n";{}
    }
    document.getElementById('invSz').innerHTML = selectedItems;

    var items=document.getElementsByName('crst');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='radio' && items[i].checked==true)
            selectedItems+=items[i].value+"\n";{}
    }
    document.getElementById('invCrst').innerHTML = selectedItems;

    var items=document.getElementsByName('sauce');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='radio' && items[i].checked==true)
            selectedItems+=items[i].value+"\n";{}
    }
    document.getElementById('invSauce').innerHTML = selectedItems;

    var items=document.getElementsByName('chz');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='radio' && items[i].checked==true)
            selectedItems+=items[i].value+"\n";{}
    }
    document.getElementById('invChz').innerHTML = selectedItems;

    var items=document.getElementsByName('meat');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox' && items[i].checked==true)
            selectedItems+=items[i].value+"\n";{}
    }
    document.getElementById('invMeat').innerHTML = selectedItems;

    var items=document.getElementsByName('veg');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox' && items[i].checked==true)
            selectedItems+=items[i].value+"\n";{}
    }
    document.getElementById('invVeggie').innerHTML = selectedItems;
}
/* End Update Order text */

