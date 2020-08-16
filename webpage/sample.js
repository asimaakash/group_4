let x = document.getElementById("fname");
let y = document.getElementById("profession");
let z = document.getElementById("email");
function f() {
  document.getElementById("output").innerHTML = "You Entered <br />";
  document.getElementById("output").innerHTML += "<p>" + x.value + "</p>";
  document.getElementById("output").innerHTML += "<p>" + y.value + "</p>";
  document.getElementById("output").innerHTML += "<p>" + z.value + "</p>";
}
