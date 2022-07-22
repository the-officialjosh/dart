const buttonn = document.getElementById("trackbutton");
buttonn.addEventListener("click", myFunction);

function myFunction() {
    const val = document.getElementById("tracker").value;
    if (val === "75Ag85tGw") {
        window.location.href = "http://dartfreightlogistics.com/track3.html";
    } else {
        window.location.href = "http://dartfreightlogistics.com/track.html";
    }
}