let userName = prompt ("What is your name?");

document.getElementById("name").innerHTML = "Welcome" + " " + userName;


function openBar() {
    document.getElementById("end").style.display = "block";
    document.getElementById("name").style.display = "none";
}

function closeCross() {
    document.getElementById("end").style.display = "none";
    document.getElementById("bars").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("close").innerHTML = "Thank You For Waiting" + " " + userName;
}