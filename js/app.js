function fetchData(idName) {
  let data = document.getElementById(idName).value;
  if (isNaN(data)) {
    alert("Invalid Input Data!");
    return null;
  }
  return parseFloat(data);
}

function innerTextToNumber(idName) {
  return parseFloat(document.getElementById(idName).innerText);
}

// account balance
let remainingBalance = document.getElementById("remaining-balance");

// *************************************************** noakhali **************************************************//
// noakhali balance
let noakhaliBalance = document.getElementById("noakhali-balance");
// noakhali donate button
let noakhaliDonateButton = document.getElementById("noakhali-donate-button");

noakhaliDonateButton.addEventListener("click", function (e) {
  let noakhaliDonateAmount = fetchData("noakhali-donate-amount");
  if (noakhaliDonateAmount === null) {
    return;
  } else if (
    parseFloat(remainingBalance.innerText) < noakhaliDonateAmount ||
    noakhaliDonateAmount < 0
  ) {
    alert("Invalid data input");
    return;
  } else {
    let balance = innerTextToNumber("remaining-balance");
    balance = balance - noakhaliDonateAmount;
    noakhaliBalance.innerText = (
      parseFloat(noakhaliBalance.innerText) + noakhaliDonateAmount
    ).toFixed(2);
    remainingBalance.innerText = balance;
  }
});

// ********************************************************* FENI ***************************************************//
// feni balance
let feniBalance = document.getElementById("feni-balance");
// feni donate button
let feniDonateButton = document.getElementById("feni-donate-button");

feniDonateButton.addEventListener("click", function (e) {
  let feniDonateAmount = fetchData("feni-donate-amount");
  if (feniDonateAmount === null) {
    return;
  } else if (
    parseFloat(remainingBalance.innerText) < feniDonateAmount ||
    feniDonateAmount < 0
  ) {
    alert("Invalid data input");
    return;
  } else {
    let balance = innerTextToNumber("remaining-balance");
    balance = balance - feniDonateAmount;
    feniBalance.innerText = (
      parseFloat(feniBalance.innerText) + feniDonateAmount
    ).toFixed(2);
    remainingBalance.innerText = balance;
  }
});

// ********************************************************* Quota ***************************************************//
// quota balance
let quotaBalance = document.getElementById("quota-balance");
// quota donate button
let quotaDonateButton = document.getElementById("quota-donate-button");

feniDonateButton.addEventListener("click", function (e) {
  let quotaDonateAmount = fetchData("quota-donate-amount");
  if (quotaDonateAmount === null) {
    return;
  } else if (
    parseFloat(remainingBalance.innerText) < quotaDonateAmount ||
    quotaDonateAmount < 0
  ) {
    alert("Invalid data input");
    return;
  } else {
    let balance = innerTextToNumber("remaining-balance");
    balance = balance - quotaDonateAmount;
    quotaBalance.innerText = (
      parseFloat(quotaBalance.innerText) + quotaDonateAmount
    ).toFixed(2);
    remainingBalance.innerText = balance;
  }
});

// *********************************************************** banner btn **********************************************//
let donationBtn = document.getElementById("donation-btn");
let historyBtn = document.getElementById("history-btn");
historyBtn.addEventListener("click", function (e) {
  historyBtn.classList.add("bg-[#B4F461]");
  donationBtn.classList.remove("bg-[#B4F461]");
});

donationBtn.addEventListener("click", function (e) {
  donationBtn.classList.add("bg-[#B4F461]");
  historyBtn.classList.remove("bg-[#B4F461]");
});

// ************************************************************* blog ***************************************************//
let blogBtn = document.getElementById("blog-btn");
blogBtn.addEventListener("click", function () {
  window.location.href = "./blog.html";
});
