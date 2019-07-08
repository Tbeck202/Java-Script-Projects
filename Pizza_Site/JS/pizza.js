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
        selectedItems+=items[i].value+" ";{}
    }
    document.getElementById('invVeggie').innerHTML = selectedItems;
}
/* End Update Order text */

function totalCost(){
    var items=document.getElementsByName('size');
    var selectedItems="";
    var sizeTotal=""
    for(var i=0; i<items.length; i++){
        if(items[i].checked==true)
            selectedItems+=items[i].value+"";
        if (selectedItems === "personal") {
            sizeTotal = 6;
        } else if (selectedItems === "medium") {
            sizeTotal = 10;
        } else if (selectedItems === "large") {
            sizeTotal = 14;
        } else if (selectedItems === "xl") {
            sizeTotal = 16;
        }
    }
    document.getElementById('costSize').innerHTML = "$" +sizeTotal;

    var items=document.getElementsByName('crst');
    var selectedCrust="";
    var crustTotal=""
    for(var i=0; i<items.length; i++){
        if(items[i].checked==true)
            selectedCrust+=items[i].value;
        if (selectedCrust === "stuffed") {
            crustTotal = 3;
        } else if (selectedCrust === "plain") {
            crustTotal = 0;
        } else if (selectedCrust === "spicy") {
            crustTotal = 0;
        } else if (selectedCrust === "garlic") {
            crustTotal = 0;
        }
        else if (selectedCrust === "house") {
            crustTotal = 0;
        }
    }
    document.getElementById('costCrust').innerHTML = "$" +crustTotal;

    var items=document.getElementsByName('sauce');
    var selectedSauce="";
    var sauceTotal=""
    for(var i=0; i<items.length; i++){
        if(items[i].checked==true)
            selectedSauce+=items[i].value;
        if (selectedSauce === "marinara") {
            sauceTotal = 0;
        } else if (selectedSauce === "white") {
            sauceTotal = 0;
        } else if (selectedSauce === "bbq") {
            sauceTotal = 0;
        } else if (selectedSauce === "none") {
            sauceTotal = 0;
        }
    }
    document.getElementById('costSauce').innerHTML = "$" +sauceTotal;

    var items=document.getElementsByName('chz');
    var selectedChz="";
    var chzTotal=""
    for(var i=0; i<items.length; i++){
        if(items[i].checked==true)
            selectedChz+=items[i].value;
        if (selectedChz === "extra") {
            chzTotal = 3;
        } else if (selectedChz === "regular") {
            chzTotal = 0;
        } else if (selectedChz === "none") {
            chzTotal = 0;
        }
    }
    document.getElementById('chzTotal').innerHTML = "$" +chzTotal;

    var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
    }
    document.getElementById('meatTotal').innerHTML = "$" +meatTotal;

    var vegTotal = 0;
	var selectedVeggie = [];
	var vegArray = document.getElementsByName("veg");
	for (var j = 0; j < vegArray.length; j++) {
		if (vegArray[j].checked) {
			selectedVeggie.push(vegArray[j].value);
		}
	}
	var meatCount = selectedVeggie.length;
	if (meatCount > 1) {
		vegTotal = (meatCount - 1);
	} else {
		vegTotal = 0;
    }
    document.getElementById('vegTotal').innerHTML = vegTotal;

    var orderTotal = (sizeTotal + crustTotal + sauceTotal + chzTotal + meatTotal + vegTotal)
        document.getElementById("totalPrice").innerHTML = "$" +orderTotal;
    
}




