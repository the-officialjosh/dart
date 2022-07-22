const buttonn = document.getElementById("trackbutton");
buttonn.addEventListener("click", myFunction);

function myFunction() {
    const valed = document.getElementById("tracker");
    const val = document.getElementById("tracker").value;
    const vals = document.getElementById("trackered").value;
    if (val == "75Ag85tGw" || vals === "75Ag85tGw") {
        window.location.href = "http://dartfreightlogistics.com/track3.html";
    } else {
        window.location.href = "http://dartfreightlogistics.com/track.html";
    }
}

valed.addEventListener("keydown", function(e) {
    if (e.key === "13" && val == "75Ag85tGw") {
        window.location.href = "http://dartfreightlogistics.com/track3.html";
    } else {
        window.location.href = "http://dartfreightlogistics.com/track.html";
    }
});
// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     // stop form submission
//     event.preventDefault();
// });