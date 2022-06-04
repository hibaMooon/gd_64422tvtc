let btnCalc = document.querySelector(`.btnCalc`);
let result = document.querySelector(`p.result`);

btnCalc.addEventListener(`click`, function () {
  let totalUni =
    +document.querySelector(`#highSchool`).value * 0.6 +
    +document.querySelector(`#ability`).value * 0.4;
  result.innerHTML = `نسبتك الموزونة هي ${totalUni}%
  <br>
  <span style="color:black;font-size:14px">بالتوفيق ❤️</span>`;
  result.style.color = `#005950`;
  result.style.fontSize = `28px`;
  document.querySelector(`.btn-date`).style.display = `inline`;
});
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    window.alert("enter only numbers");
  return true;
}
