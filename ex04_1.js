function changeText(){
    document.getElementById("div1").innerHTML="Changed by JS";
}

function changeColor(){
    document.getElementById("div1").style = "color:red";
}

function Greeting() {
        var name = document.getElementById("name").value;       
        alert("Hello " + name);
    }
