function result() {
  const locigalbtn = document.getElementById("optionseclect").value;
  const ftext = parseInt(document.getElementById("firstNum").value);
  const ltext = parseInt(document.getElementById("lastnum").value);
  if (locigalbtn === "+") {
    document.getElementById("sumtxt").value = ftext + ltext;
  } else if (locigalbtn === "-") {
    document.getElementById("sumtxt").value = ftext - ltext;
  } else if (locigalbtn === "*") {
    document.getElementById("sumtxt").value = ftext * ltext;
  } else if (locigalbtn === "/") {
    document.getElementById("sumtxt").value = ftext / ltext;
  }
}

function validate() {
  let x, text;
  x = document.getElementById("firstNum").value;
  if (isNaN(x) || x == "") {
    text = "Please Enter Only Numaric Value";
  } else {
    text = "";
  }
  document.getElementById("numloc").innerHTML = text;
}

function validate2() {
  let y, text;
  y = document.getElementById("lastnum").value;
  if (isNaN(y) || y == "") {
    text = "Please Enter Only Numaric Value";
  } else {
    text = "";
  }
  document.getElementById("numlok").innerHTML = text;
}
