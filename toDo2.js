
function menuadd(txtval,ull) {
        let li = document.createElement("li");
        li.id = "menulistinpOnid";
        li.innerHTML = txtval;
        ull.appendChild(li);
    }

// Menu open
let sideMenuButton = document.body.querySelector("i");
let nbClick = 0;
let menuli = document.body.querySelectorAll(".menulistinp");
let tableauMenu = [];
sideMenuButton.addEventListener("click", function (e) {
    nbClick += 1;
    console.log("clicked");
    if (nbClick % 2 == 0) {
        document.body.querySelector(".sideMenu").id = 'menuSlideOut';
        document.body.querySelector(".sideMenu").style.width = '0%';
        document.body.querySelector(".menulist").className = "menulist";
        for (let i = 0; i < menuli.length; i++) {
            document.body.querySelector(".menulistinpOn").className = "menulistinp";
            document.body.querySelector("#menulistinpOnid").className = "menulistinp";
        }
        

    } else {
        document.body.querySelector(".sideMenu").id = 'menuSlideIn';
        document.body.querySelector(".sideMenu").style.width = '40%';
        document.body.querySelector(".menulist").className = "menulist menulistOn";
        document.body.querySelector(".menulistinp").className = "menulistinpOn";
        

        for (let i = 0; i < menuli.length; i++) {
            menuli[i].style.textContent = "center";
            document.body.querySelector(".menulistinp").className = "menulistinpOn";
        }
    }

})
// Menu open end
// Menu append list
document.body.querySelector(".menulist").addEventListener("click", function (e) {
    console.log("listClick");
    let ulmenu = document.body.querySelector(".menuul");
    let categoryVal = document.body.querySelector("#categoryName").value;
    menuadd(categoryVal,ulmenu);
    

});
// Menu append list end
// LIST CONTROLLER
let ul = document.getElementById("ul");
let tableau = [];
let tableauComment = [];

document.body.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    let saisi = document.getElementById("titre");
    let commentaire = document.body.querySelector("#comment").value;
    if (saisi.value === "") {
        document.body.querySelector("#buttonSubmit").className = "buttonDenied";
        // setTimeout(function () { document.body.querySelector(".buttonDenied").className = "buttonAllowed"; }, 300);
        document.body.querySelector("#buttonSubmit").addEventListener("animationend", function (e) {
            document.body.querySelector("#buttonSubmit").className = "buttonAllowed";
        });

    } else {
        tableauComment.push(commentaire);
        tableau.push(saisi.value);
        aff(commentaire);
    }

});

function aff() {
    ul.innerHTML = "";

    for (let i = 0; i < tableau.length; i++) {
        let li = document.createElement("li");
        li.className = "listAppendMain";
        li.innerHTML = "Task " + (i + 1) + " : " + tableau[i] + "<br/> Description : " + tableauComment[i];
        ul.appendChild(li);
        let buton = document.createElement("button");
        buton.textContent = "Delete";
        li.appendChild(buton);
        buton.onclick = function () {
            tableau.splice(i, 1);
            tableauComment.splice(i, 1);
            aff();
        };
    }
}
//END