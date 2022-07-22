const buttonn = document.getElementById("trackbutton");
buttonn.addEventListener("click", myFunction);

function myFunction() {
    const val = document.getElementById("tracker").value;
    const vals = document.getElementById("trackered").value;
    if (val === "75Ag85tGw") {
        window.location.href = "http://dartfreightlogistics.com/track3.html";
    } else if (vals === "75Ag85tGw") {
        window.location.href = "http://dartfreightlogistics.com/track3.html";
    } else {
        window.location.href = "http://dartfreightlogistics.com/track.html";
    }
}