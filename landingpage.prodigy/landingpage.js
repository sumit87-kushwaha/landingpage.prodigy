let text = " you new customer"
let i = 0;

function effect() {

    var x = document.getElementById("animation")
    x.innerHTML += text.charAt(i);
    i++;
    setTimeout(effect, 200)
}

