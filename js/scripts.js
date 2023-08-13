    const reason = document.querySelector("input:radio[name='reason']:checked").val;
    const response = document.querySelector("input:radio[name='response']:checked").val;
    const way = document.querySelector("input:radio[name='way']:checked").val;
    const car = document.querySelector("input:radio[name='car']:checked").val;
    const platform = document.querySelector("input:radio[name='platform']:checked").val;
    const os = document.querySelector("input:radio[name='os']:checked").val;
    const tendency = document.querySelector("input:radio[name='tendency']:checked").val;
    const company = document.querySelector("input:radio[name='company']:checked").val;

window.addEventListener('load', function () {

  let form = document.querySelector("form");
  form.addEventListener('submit',  function (event) {
    event.preventDefault();

    
  });
});