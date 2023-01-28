var belaList = [];
var position = "None";
window.onload = function () {
  if (localStorage.getItem("jillaList") != null) {
    belaList = JSON.parse(localStorage.getItem("jillaList"));
    display();
  }
};
function addtolist(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    var inp = document.getElementById("input");
    if (!inp.value) {
      alert("Enter a valid task");
    } else if (position != "None") {
      belaList[position] = inp.value;
      inp.value = "";
      position = "None"
      display();
    } else if (position === "None") {
      belaList.push(inp.value);
      if (localStorage.getItem("jillaList") == null) {
        localStorage.setItem("jillaList", JSON.stringify(belaList));
      } else {
        localStorage.setItem("jillaList", JSON.stringify(belaList));
      }
      inp.value = "";
      display();
    }
  }
}
function display() {
  document.querySelector("#newtasklist").innerHTML = "";
  for (var i = 0; i < belaList.length; i++) {
    document.querySelector("#newtasklist").innerHTML += `<li class="actions">
    <span>${belaList[i]}</span>
    <i>
    <i class="fa-solid fa-pencil fa-sm" onClick="edit(${i})" width="18" height="8"></i>
    <i class="fa-solid fa-xmark" onClick="remove(${i})"  width="18" height="12"> </i>
    <input class="checkbox" type="checkbox" onClick="tick(${i})"  width="18" height="12"/>
    </i>
  </li>`;
  }
}
function tick(index) {
  if (belaList[index].includes("<del>")) {
    belaList[index] = belaList[index].replace("<del>", "");
    belaList[index] = belaList[index].replace("</del>", "");
  } else {
    belaList[index] = "<del>" + belaList[index] + "</del>";
  }
  if (localStorage.getItem("jillaList") == null) {
    localStorage.setItem("jillaList", JSON.stringify(belaList));
  } else {
    localStorage.setItem("jillaList", JSON.stringify(belaList));
  }
  display();
}
function remove(index) {
  belaList.splice(index, 1);
  if (localStorage.getItem("jillaList") == null) {
    localStorage.setItem("jillaList", JSON.stringify(belaList));
  } else {
    localStorage.setItem("jillaList", JSON.stringify(belaList));
  }
  display();
}
function edit(index) {
  position = index;
  var sanji = document.getElementById("input");
  if (belaList[index].includes("<del>")) {
    belaList[index] = belaList[index].replace("<del>", "");
    belaList[index] = belaList[index].replace("</del>", "");
  }
  sanji.value = belaList[index];
}
display();
