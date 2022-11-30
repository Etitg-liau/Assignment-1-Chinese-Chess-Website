/*having a form hidden*/
function fromnp(that) {
    if (that.value == "no") {
alert("check");
        document.getElementById("ifYes").style.display = "block";
    }
    else {
        document.getElementById("ifYes").style.display = "none";
    }
}