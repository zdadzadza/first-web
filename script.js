function my(){
    document.getElementById("demo").innerHTML = "Hello World";
}


function myFun() {
    const h1 = document.createElement('h1');
h1.textContent = 'Hello World';
document.body.appendChild(h1);
}
function add() {
    const a = parseFloat(document.getElementById("i1").value);
    let b = parseFloat(document.getElementById("i2").value); 
    let c = a + b;
    const d = document.getElementById("i1");
    document.getElementById("i3").value = c;
    document.getElementById("i3").innerHTML = c;
    document.getElementById("i3").style.color = "red";
    
    if (isNaN(a) || isNaN(b)) {
        alert("is not corected");
    }




}



