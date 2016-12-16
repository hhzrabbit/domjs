//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
    var j=30;
    return j+x;
};


//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod=1;
    for ( ; n > 1 ; n--){
	prod = prod * n;
    }
    return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
    if ( n<=1 ) {
	return 1;
    }
    else {
	return n * factR(n-1);
    }
};


//add list item 
var addItem = function(text) {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    list.appendChild(newitem);
};


//remove specified item from list
var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li');
    listitems[n].remove();
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].classList.add('red');
    }
};

var buttonCallback = function(e){
    console.log(this);
    addItem("w0w");
    var listitems = document.getElementsByTagName('li');
    newestItem = listitems[listitems.length - 1];
    newestItem.addEventListener('mouseover', hoverCallback);
    newestItem.addEventListener('mouseout', unhoverCallback);
};

var hoverCallback = function(e){
  //  console.log(this);
    var newtext = this.innerHTML;
    header.innerHTML = newtext;
}

var unhoverCallback = function(e){
  //  console.log(this);
    header.innerHTML = headerText;
}

var clickCallback = function(e){
    console.log(this);
    this.parentNode.removeChild(this)
}

//instantiate an object
var o = { 'name' : 'Thluffy',
	  age : 15,
	  items : [10, 20, 30, 40],
	  morestuff : {a : 1, b : 'ayo'},
	  func : function(x) {
	      return x+30;
	  }
	};

var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);



var items = document.getElementsByTagName("li");
for(var i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', hoverCallback);
    items[i].addEventListener('mouseout', unhoverCallback);
    items[i].addEventListener('click', clickCallback);
}

var header = document.getElementById("h");
var headerText = header.innerHTML;
