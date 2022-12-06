var inputSearch = document.querySelector("input.serch");
inputSearch.addEventListener("keyup", filter);

function filter() {
  var inputvalue = inputSearch.value.toUpperCase();
  var ul = document.querySelector("ul.datalist");
  var li = ul.querySelectorAll("li");

  li.forEach(myfunc);

  function myfunc(x) {
    var cx = x.textContent.toUpperCase();
    if (cx.indexOf(inputvalue) > -1) {
      x.style.display = "";
    } else {
      x.style.display = "none";
    }
  }
}
