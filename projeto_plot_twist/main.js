//quando clica no botão, ele muda de lugar

var b = document.querySelector("#button");
b.addEventListener("click",change);

function change()
{
let i = Math.floor(Math.random()*300)+1;
let j = Math.floor(Math.random()*800)+1;
let k = Math.floor(Math.random()*300)+1;
let l = Math.floor(Math.random()*800)+1;
    b.style.left = i+'px';
    b.style.top = j + "px";
    b.style.right = k + 'px';
    b.style.down = l + 'px';
}

// quando clica no botão, o resto some


var buttonVar = document.getElementById("button")

buttonVar.addEventListener("click", apagaResto)

function apagaResto() {
    var message = document.getElementById("message")
    message.classList.add("disappear")

    var arrow = document.getElementById("arrow-img")
    arrow.classList.add("disappear")
}