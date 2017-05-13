let ul = document.getElementById("ul");
let tableau = [];
let tableauComment = [];                            //COMMENTAIRE

document.body.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    let saisi = document.getElementById("titre");
    let commentaire = document.body.querySelector("#comment").value;
    if (saisi.value === "") {
        document.body.querySelector("style").innerHTML = `#buttonSubmit{animation-name:red;animation-duration:1s;}
                                                          #buttonSubmit:hover{background-color:red;animation-name:red;animation-duration:1s;}
                                                          @keyframes red{from{background-color:red;}to{background-color:white;}}`;
    } else {
        document.body.querySelector("style").innerHTML = "";
        tableauComment.push(commentaire);           //COMMENTAIRE
        tableau.push(saisi.value);
        aff(commentaire);
    }

});

function aff() {
    ul.innerHTML = "";

    for (let i = 0; i < tableau.length; i++) {
        let li = document.createElement("li");
        li.textContent = "Task " + (i + 1) + " : " + tableau[i] + "  Commentaire : " + tableauComment[i];   //COMMENTAIRE
        ul.appendChild(li);
        let buton = document.createElement("button");
        buton.textContent = "Delete";
        li.appendChild(buton);
        buton.onclick = function () {
            tableau.splice(i, 1);
            tableauComment.splice(i, 1);              //COMMENTAIRE
            aff();
        };
    }
}
// http://stackoverflow.com/questions/20340138/remove-blue-border-from-css-custom-styled-button-in-chrome