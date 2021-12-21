var languageSelector = document.getElementById("l_selector");
var dropdown_list = document.getElementById("dropdown_list");
var f_france = document.getElementById("f_france");
var f_allemand = document.getElementById("f_allemand");
var f_anglais = document.getElementById("f_anglais");
var f_espagnol = document.getElementById("f_espagnol");
var f_italen = document.getElementById("f_italen");
var selected_flag = document.getElementById("selected_flag");

f_france.addEventListener("click", langFr);
f_allemand.addEventListener("click", langGer);
f_anglais.addEventListener("click", langEn);
f_espagnol.addEventListener("click", langEs);
f_italen.addEventListener("click", langIt);
languageSelector.addEventListener("click", displayFlags);

function displayFlags(event) {
    event.preventDefault();
    dropdown_list.style.opacity = 1;
    dropdown_list.style.visibility = "visible";
}
function langFr(event) {
    event.preventDefault();
    selected_flag.src = "img/drapeau_francais.svg";
    dropdown_list.style.opacity = 0;
    dropdown_list.style.visibility = "hidden";
}
function langGer(event) {
    event.preventDefault();
    selected_flag.src = "img/drapeau_allemand.svg";
    dropdown_list.style.opacity = 0;
    dropdown_list.style.visibility = "hidden";
}
function langEn(event) {
    event.preventDefault();
    selected_flag.src = "img/drapeau_anglais.svg";
    dropdown_list.style.opacity = 0;
    dropdown_list.style.visibility = "hidden";
}
function langEs(event) {
    event.preventDefault();
    selected_flag.src = "img/drapeau_espagnol.svg";
    dropdown_list.style.opacity = 0;
    dropdown_list.style.visibility = "hidden";
}
function langIt(event) {
    event.preventDefault();
    selected_flag.src = "img/drapeau_italien.svg";
    dropdown_list.style.opacity = 0;
    dropdown_list.style.visibility = "hidden";
}
