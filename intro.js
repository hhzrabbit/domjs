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
var addItem = function(text,id) {
    var list = document.getElementById(id);
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    console.log("list: "+ list );
    console.log("new item: "+newitem);
    list.appendChild(newitem);
};

//remove specified item from list
var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li');
    listitems[n].remove();
};

//turn list items red
var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].classList.add('red');
    }
};

//turn header into text
var hoverCallback = function(e){
  //  console.log(this);
    var newtext = this.innerHTML;
    header.innerHTML = newtext;
};

//return header to orginal text
var unhoverCallback = function(e){
  //  console.log(this);
    header.innerHTML = headerText;
};
  
//remove child node  
var clickCallback = function(e){
    console.log(this);
    this.parentNode.removeChild(this)
};

//return nth fib num 
var fib = function(n){ 
    var result = 0;
    if (n<=1) return n;
    result = fib(n-1) + fib(n-2);
    return result;
};

//return nth tribonacci num 
var tri = function(n){ 
    var result = 0;
    if (n<=1) return n;
    if (n==2) return 1;
    result = tri(n-1) + tri(n-2) + tri(n-3);
    return result;
};


//return nth lucas num 
var luc = function(n){ 
    var result = 0;
    if (n==0) return 2;
    if (n==1) return 1;
    result = luc(n-1) + luc(n-2);
    return result;
};



//add listitem 
var buttonCallback = function(text,id){
    console.log(text);
    addItem(text,id);
    var listitems = document.getElementsByTagName('li');
    console.log(listitems);

    if (text == "thelist"){
	newestItem = listitems[listitems.length - 1];
	newestItem.addEventListener('mouseover', hoverCallback);
	newestItem.addEventListener('mouseout', unhoverCallback);
	newestItem.addEventListener('click',  clickCallback);
    }
};


//instantiate an object
var o = { 'name' : 'Thluffy',
	  age : 15,
	  items : [10, 20, 30, 40],
	  morestuff : {a : 1, b : 'ayo'},
	  func : function(x) {
	return x+30;
    }
};

//anonymous functions
var nButton = function(){
    buttonCallback("Geraldine","thelist");
};

var fibonacciButton = function(){
    var list = document.getElementById("fibList");
    var listItems = list.getElementsByTagName("li");
    buttonCallback(fib(listItems.length+1),"fibList");
};

var naturalButton = function(){
    var list = document.getElementById("natural");
    var listItems = list.getElementsByTagName("li");
    buttonCallback(listItems.length+1,"natural");
};

var lucasButton = function(){
    var list = document.getElementById("lucasList");
    var listItems = list.getElementsByTagName("li");
    buttonCallback(luc(listItems.length+1),"lucasList");
};

var tribonacciButton = function(){
    var list = document.getElementById("tribonacciList");
    var listItems = list.getElementsByTagName("li");
    buttonCallback(tri(listItems.length+1),"tribonacciList");
};




//calls
var b = document.getElementById('b');
b.addEventListener('click', nButton);

var f = document.getElementById('fibonacciButton');
f.addEventListener('click', fibonacciButton);

var natural = document.getElementById('naturalButton');
natural.addEventListener('click', naturalButton);

var lucas = document.getElementById('lucasButton');
lucas.addEventListener('click', lucasButton);

var tribonacci = document.getElementById('tribonacciButton');
tribonacci.addEventListener('click', tribonacciButton);

var items = document.getElementsByTagName("li");
for(var i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', hoverCallback);
    items[i].addEventListener('mouseout', unhoverCallback);
    items[i].addEventListener('click', clickCallback);
}

var header = document.getElementById("h");
var headerText = header.innerHTML;


