let homeBtn = document.getElementById("home-btn");

const remainingBalanceFromIndex = localStorage.getItem("savedRemainingBalance");

if (remainingBalanceFromIndex !== null) {
  let remainingBalance2 = document.getElementById("remaining-balance2");
  remainingBalance2.innerText = parseFloat(remainingBalanceFromIndex).toFixed(
    2
  );
} else {
  console.error("No balance stored in localStorage");
}

homeBtn.addEventListener("click", function (e) {
  window.location.href = "./index.html";
});
