let x,ans="";
let err=0;

document.getElementById("zero").onclick = function() {x="0"; display1();};
document.getElementById("one").onclick = function() {x="1"; display1();};
document.getElementById("two").onclick = function() {x="2"; display1();};
document.getElementById("three").onclick = function() {x="3"; display1();};
document.getElementById("four").onclick = function() {x="4"; display1();};
document.getElementById("five").onclick = function() {x="5"; display1();};
document.getElementById("six").onclick = function() {x="6"; display1();};
document.getElementById("seven").onclick = function() {x="7"; display1();};
document.getElementById("eight").onclick = function() {x="8"; display1();};
document.getElementById("nine").onclick = function() {x="9"; display1();};

document.getElementById("point").onclick = function() {x="."; display2();};
document.getElementById("bSpace").onclick = function() {backspace();};
document.getElementById("plus").onclick = function() {x="+"; display2();};
document.getElementById("minus").onclick = function() {x="-"; display2();};
document.getElementById("multiply").onclick = function() {x="*"; display2();};
document.getElementById("divide").onclick = function() {x="/"; display2();};
document.getElementById("modulus").onclick = function() {x="%"; display2();};

document.getElementById("C").onclick = function() {ans="";x=""; display();err=0;};

document.getElementById("equal").onclick = function() { displayX();};

function display() {
    ans+=x;
    document.getElementById("display").value=ans;
}

function display1() {
    ans+=x;
    document.getElementById("display").value=ans;
    err=1;
}

function display2() {
    if (err==1) {
        display();
        err=0;
    }
    else {
        alert("Two operators cannot be used after one another.");
    }
}

function displayX() {
    x=eval(ans);
    ans=x;
    document.getElementById("display").value=ans;
}

function backspace() {
    ans=document.getElementById("display").value;
    ans = ans.substring(0, ans.length - 1);
    document.getElementById("display").value=ans;
}