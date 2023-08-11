$(document).ready(function () {

  $("form#survey").submit(function (event) {
    event.preventDefault();

    const reason = $("input:radio[name=reason]:checked").val();
    const response = $("input:radio[name=response]:checked").val();
    const way = $("input:radio[name=way]:checked").val();
    const car = $("input:radio[name=car]:checked").val();
    const platform = $("input:radio[name=platform]:checked").val();
    const os = $("input:radio[name=os]:checked").val();
    const tendency = $("input:radio[name=tendency]:checked").val();
    const company = $("input:radio[name=company]:checked").val();
  });
});