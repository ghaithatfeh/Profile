
// document.querySelector(".links").onclick = function () {
//     let displayState = document.querySelector("ul").style.display;
//     if (displayState == 'none') {
//         document.querySelector("ul").style.display = 'block';
//         document.querySelector("#secSpan").style.width = '100%';
//     }
//     else {
//         document.querySelector("ul").style.display = 'none';
//         document.querySelector("#secSpan").style.width = '50%';
//     }
// }
// document.querySelector(".links").onmouseover = function (){
//     document.querySelector("ul").style.display = 'block';
//     document.querySelector("#secSpan").style.width = '100%';
// }
// document.querySelector(".links").onmouseout = function(){
//     document.querySelector("ul").style.display = 'none';
//     document.querySelector("#secSpan").style.width = '50%';
// }
// var container = document.querySelectorAll(".cono");
// for (let i = 1; i < container.length; i++)
//     container[i].onclick = function () {
//         let displayState = document.querySelector("ul").style.display;
//         if (displayState == 'block') {
//             document.querySelector("ul").style.display = 'none';
//             document.querySelector("#secSpan").style.width = '50%';
//         }
//     }

// let x = false;
document.querySelector(".links").addEventListener("click", myF);
function myF() {
    let displayState = document.querySelector("ul").style.display;
    if (displayState == 'none'/* && x != true*/) {
        document.querySelector("ul").style.display = 'block';
        document.querySelector("#secSpan").style.width = '100%';
    }
    else {
        document.querySelector("ul").style.display = 'none';
        document.querySelector("#secSpan").style.width = '50%';
    }
    // x = false;
}
document.body.addEventListener("click", myF2, true);
function myF2() {
    let displayState = document.querySelector("ul").style.display;
    if (displayState == 'block') {
        document.querySelector("ul").style.display = 'none';
        document.querySelector("#secSpan").style.width = '50%';
        // x = true;
    }
}