function isCheck() {
  var num = document.getElementById("evenOdd").value;
  if (num % 2 == 0) {
    document.getElementById("showMsg").innerHTML = num + "  is an even number";
  } else {
    document.getElementById("showMsg").innerHTML = num + "  is an odd number";
  }

  if (num === "") {
    document.getElementById("showMsg").innerHTML = "";
  }
}

document.getElementById("fibgenerate").addEventListener("click", function () {
  var fibinput = document.getElementById("fib");
  var fibresult = document.getElementById("result");
  var fiblistresult = document.getElementById("fib-list");
  var reg = new RegExp("^[0-9]+$");
  if (fibinput.value == "" || Number.isInteger(fibinput.value)) {
    fibinput.focus();
    return false;
  }
  fibresult.innerHTML = "Generated Fibonacci Results for " + fibinput.value;
  var f1 = 0;
  var f2 = 1;
  result = "<li>" + f1 + "</li>";
  for (i = 0; i < fibinput.value; i++) {
    res = f1 + f2;
    f1 = f2;
    f2 = res;
    result += "<li>" + f1 + "</li>";
  }
  fiblistresult.innerHTML = result;
});
