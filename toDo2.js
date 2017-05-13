let sideMenuButton = document.body.querySelector("i");
let nbClick = 0;
sideMenuButton.addEventListener("click", function(e) {
    nbClick += 1;
    console.log("clicked");
    if (nbClick % 2 == 0) {
        document.body.querySelector(".sideMenu").id = 'menuSlideOut';
        document.body.querySelector(".sideMenu").style.width = '0%';

    } else {
        document.body.querySelector(".sideMenu").id = 'menuSlideIn';
        document.body.querySelector(".sideMenu").style.width = '40%';
    }

})

// LIST CONTROLLER --------------------------------------------------------------------------------------------------------------------------
let ul = document.getElementById("ul");
let tableau = [];
let tableauComment = []; //COMMENTAIRE

document.body.querySelector("form").addEventListener('submit', function(e) {
    e.preventDefault();
    let saisi = document.getElementById("titre");
    let commentaire = document.body.querySelector("#comment").value;
    if (saisi.value === "") {
        document.body.querySelector("#buttonSubmit").className = "buttonDenied";
        setTimeout(function() { document.body.querySelector(".buttonDenied").className = "buttonAllowed"; }, 300);

    } else {
        tableauComment.push(commentaire); //COMMENTAIRE
        tableau.push(saisi.value);
        aff(commentaire);
    }

});

function aff() {
    ul.innerHTML = "";

    for (let i = 0; i < tableau.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = "Task " + (i + 1) + " : " + tableau[i] + "<br/> Description : " + tableauComment[i];
        ul.appendChild(li);
        let buton = document.createElement("button");
        buton.textContent = "Delete";
        li.appendChild(buton);
        buton.onclick = function() {
            tableau.splice(i, 1);
            tableauComment.splice(i, 1); //COMMENTAIRE
            aff();
        };
    }
}
//END --------------------------------------------------------------------------------------------------------------------------