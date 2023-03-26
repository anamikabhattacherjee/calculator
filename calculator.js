//document.getElementById("zero").addEventListener("click", add(0));
document.getElementById("zero").addEventListener("click", function addtodisplay(){add('0')});
document.getElementById("one").addEventListener("click", function addtodisplay(){add('1')});
document.getElementById("two").addEventListener("click", function addtodisplay(){add('2')});
document.getElementById("three").addEventListener("click", function addtodisplay(){add('3')});
document.getElementById("four").addEventListener("click", function addtodisplay(){add('4')});
document.getElementById("five").addEventListener("click", function addtodisplay(){add('5')});
document.getElementById("six").addEventListener("click", function addtodisplay(){add('6')});
document.getElementById("seven").addEventListener("click", function addtodisplay(){add('7')});
document.getElementById("eight").addEventListener("click", function addtodisplay(){add('8')});
document.getElementById("nine").addEventListener("click", function addtodisplay(){add('9')});
document.getElementById("add").addEventListener("click", function addtodisplay(){add('+')});
document.getElementById("sub").addEventListener("click", function addtodisplay(){add('-')});
document.getElementById("multi").addEventListener("click", function addtodisplay(){add('*')});
document.getElementById("div").addEventListener("click", function addtodisplay(){add('/')});
document.getElementById("calculate").addEventListener("click", calculate_result);
function add(s) {
    document.getElementById("display").value +=s;
}
/*function addzero() {
    document.getElementById("display").value +="0";
}
function addone() {
    document.getElementById("display").value +="1";
}
function addtwo() {
    document.getElementById("display").value +="2";
}
function addthree() {
    document.getElementById("display").value +="3";
}
function addfour() {
    document.getElementById("display").value +="4";
}
function addfive() {
    document.getElementById("display").value +="5";
}
function addsix() {
    document.getElementById("display").value +="6";
}
function addseven() {
    document.getElementById("display").value +="7";
}
function addeight() {
    document.getElementById("display").value +="8";
}
function addnine() {
    document.getElementById("display").value +="9";
}
function addplus() {
    document.getElementById("display").value +="+";
}
function addsub() {
    document.getElementById("display").value +="-";
}
function addmulti() {
    document.getElementById("display").value +="*";
}
function adddiv() {
    document.getElementById("display").value +="/";
} */
function calculate_result() {
    let text = document.getElementById("display").value;
   document.getElementById("display").value= eval(text);
}
