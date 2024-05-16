
function menuButton(){
  var button = document.getElementById("chang-icon");
  var icon = button.querySelector ("i");
  if (icon.className === "bi bi-list") {
    icon.classList ="bi bi-x";
  } else{
    icon.className ="bi bi-list";
  }
}
