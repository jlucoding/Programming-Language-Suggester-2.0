window.addEventListener("load", function () {

  let start = document.getElementById("start");

  start.addEventListener("click", function () {
    form1.removeAttribute("class");
    start.setAttribute("class", "hide");
  });

  let form1 = document.getElementById("reason");
  let form2 = document.getElementById("direction");
  let form3 = document.getElementById("learn");
  let form4 = document.getElementById("car");
  let form5 = document.getElementById("platform");
  let form6 = document.getElementById("mobile");
  let form7 = document.getElementById("web");
  let form8 = document.getElementById("enterprise");
  let result = document.getElementById("result");

  form1.addEventListener("submit", function (event) {
    event.preventDefault();
    form1.setAttribute("class", "hide");
    const reason = $("input[name=reason]:checked").val();
    if (reason === "unknown") {
      result.removeAttribute("class");
      result = "Python";
    } else if (reason === "interest" || reason === "money") {
      form2.removeAttribute("class");
    }
  });

  form2.addEventListener("submit", function (event) {
    event.preventDefault();
    form2.setAttribute("class", "hide");

    const response = $("input[name=response]:checked").val();



  });

  form3.addEventListener("submit", function (event) {
    event.preventDefault();
    form3.setAttribute("class", "hide");

    const way = $("input[name=way]:checked").val();


  });

  form4.addEventListener("submit", function (event) {
    event.preventDefault();
    form4.setAttribute("class", "hide");

    const car = $("input[name=car]:checked").val();


  });

  form5.addEventListener("submit", function (event) {
    event.preventDefault();
    form5.setAttribute("class", "hide");
 
    const platform = $("input[name=platform]:checked").val();


  });

  form6.addEventListener("submit", function (event) {
    event.preventDefault();
    form6.setAttribute("class", "hide");
 
    const os = $("input[name=os]:checked").val();

  });

  form7.addEventListener("submit", function (event) {
    event.preventDefault();
    form7.setAttribute("class", "hide");

    const tendency = $("input[name=tendency]:checked").val();


  });

  form8.addEventListener("submit", function (event) {
    event.preventDefault();
    form8.setAttribute("class", "hide");

    const company = $("input[name=company]:checked").val();


  });







});