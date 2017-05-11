let ul = document.getElementById("ul");
let saisi = document.getElementById("titre");
let tableau = [];

document.body.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();

    if (saisi.value === "") {
        document.body.querySelector("style").innerHTML = "#buttonSubmit{animation-name:red;animation-duration:1s;}#buttonSubmit:hover{background-color:red;animation-name:red;animation-duration:1s;}@keyframes red{from{background-color:red;}to{background-color:white;}}";
    } else {
        document.body.querySelector("style").innerHTML = "";
        tableau.push(saisi.value);
        aff();
    }

});

function aff() {
    ul.innerHTML = "";

    for (let i = 0; i < tableau.length; i++) {
        let li = document.createElement("li");
        li.textContent = tableau[i];
        ul.appendChild(li);
        let buton = document.createElement("button");
        buton.textContent = "Delete";
        li.appendChild(buton);
        buton.onclick = function() {
            tableau.splice(i, 1);
            aff();
        };
    }
}
// http://stackoverflow.com/questions/20340138/remove-blue-border-from-css-custom-styled-button-in-chrome