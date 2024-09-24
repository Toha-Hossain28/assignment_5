// common functionS

function fetchData(idName) {
  let data = document.getElementById(idName).value;
  if (isNaN(data) || data === "") {
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
let donate = document.getElementById("donate");
let history = document.getElementById("history");
let noakhaliTitle = document.getElementById("noakhali-title").innerText;
let feniTitle = document.getElementById("feni-title").innerText;
let quotaTitle = document.getElementById("quota-title").innerText;
let modal = document.getElementById("my_modal");
// localStorage.setItem("savedRemainingBalance", remainingBalance.innerText);

// *************************************************** noakhali **************************************************//
// noakhali balance
let noakhaliBalance = document.getElementById("noakhali-balance");
// noakhali donate button
let noakhaliDonateButton = document.getElementById("noakhali-donate-button");

noakhaliDonateButton.addEventListener("click", function (e) {
  const currentTime = new Date();
  const formattedDate = currentTime.toString();
  let noakhaliDonateAmount = fetchData("noakhali-donate-amount");
  if (noakhaliDonateAmount === null) {
    return;
  } else if (
    parseFloat(remainingBalance.innerText) < noakhaliDonateAmount ||
    noakhaliDonateAmount <= 0
  ) {
    alert("Invalid data input");
    return;
  } else {
    let balance = innerTextToNumber("remaining-balance");
    balance = balance - noakhaliDonateAmount;
    noakhaliBalance.innerText = (
      parseFloat(noakhaliBalance.innerText) + noakhaliDonateAmount
    ).toFixed(2);
    remainingBalance.innerText = balance.toFixed(2);
    // console.log(formattedDate);
    let newHistoryCard = document.createElement("div");
    newHistoryCard.classList.add(
      "lg:p-8",
      "rounded-2xl",
      "mb-8",
      "border-[1px]",
      "p-4"
    );
    newHistoryCard.innerHTML = `<h3 class="lg:font-bold lg:text-xl font-semibold text-lg  text-[#111111] mb-4">
            ${noakhaliDonateAmount} Taka is Donated for ${noakhaliTitle}
          </h3>
          <p class="text-[#111111B3] font-light lg:text-base text-sm bg-slate-50 rounded-md px-2">
            Date : ${formattedDate}
          </p>`;
    history.appendChild(newHistoryCard);
    localStorage.setItem("savedRemainingBalance", remainingBalance.innerText);
    modal.showModal();
  }
});

// ********************************************************* FENI ***************************************************//
// feni balance
let feniBalance = document.getElementById("feni-balance");
// feni donate button
let feniDonateButton = document.getElementById("feni-donate-button");

feniDonateButton.addEventListener("click", function (e) {
  const currentTime = new Date();
  const formattedDate = currentTime.toString();
  let feniDonateAmount = fetchData("feni-donate-amount");
  if (feniDonateAmount === null) {
    return;
  } else if (
    parseFloat(remainingBalance.innerText) < feniDonateAmount ||
    feniDonateAmount <= 0
  ) {
    alert("Invalid data input");
    return;
  } else {
    let balance = innerTextToNumber("remaining-balance");
    balance = balance - feniDonateAmount;
    feniBalance.innerText = (
      parseFloat(feniBalance.innerText) + feniDonateAmount
    ).toFixed(2);
    remainingBalance.innerText = balance.toFixed(2);
    let newHistoryCard = document.createElement("div");
    newHistoryCard.classList.add(
      "lg:p-8",
      "rounded-2xl",
      "mb-8",
      "border-[1px]",
      "p-4"
    );
    newHistoryCard.innerHTML = `<h3 class="font-bold text-xl text-[#111111] mb-4">
            ${feniDonateAmount} Taka is Donated for ${feniTitle}
          </h3>
          <p class="text-[#111111B3] font-light text-base bg-slate-50 rounded-md px-2">
            Date : ${formattedDate}
          </p>`;
    history.appendChild(newHistoryCard);
    localStorage.setItem("savedRemainingBalance", remainingBalance.innerText);
    modal.showModal();
  }
});

// ********************************************************* Quota ***************************************************//
// quota balance
let quotaBalance = document.getElementById("quota-balance");
// quota donate button
let quotaDonateButton = document.getElementById("quota-donate-button");

quotaDonateButton.addEventListener("click", function (e) {
  const currentTime = new Date();
  const formattedDate = currentTime.toString();
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
    remainingBalance.innerText = balance.toFixed(2);
    let newHistoryCard = document.createElement("div");
    newHistoryCard.classList.add(
      "lg:p-8",
      "rounded-2xl",
      "mb-8",
      "border-[1px]",
      "p-4"
    );
    newHistoryCard.innerHTML = `<h3 class="font-bold text-xl text-[#111111] mb-4">
            ${quotaDonateAmount} Taka is Donated for ${quotaTitle}
          </h3>
          <p class="text-[#111111B3] font-light text-base bg-slate-50 rounded-md px-2">
            Date : ${formattedDate}
          </p>`;
    history.appendChild(newHistoryCard);
    localStorage.setItem("savedRemainingBalance", remainingBalance.innerText);
    modal.showModal();
  }
});

// *********************************************************** banner btn **********************************************//

let donationBtn = document.getElementById("donation-btn");
let historyBtn = document.getElementById("history-btn");
historyBtn.addEventListener("click", function (e) {
  historyBtn.classList.add("bg-[#B4F461]");
  donationBtn.classList.remove("bg-[#B4F461]");
  donate.classList.add("hidden");
  history.classList.remove("hidden");
});

donationBtn.addEventListener("click", function (e) {
  donationBtn.classList.add("bg-[#B4F461]");
  historyBtn.classList.remove("bg-[#B4F461]");
  history.classList.add("hidden");
  donate.classList.remove("hidden");
});

// ************************************************************* blog ***************************************************//
let blogBtn = document.getElementById("blog-btn");
blogBtn.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// ************************************************************** history update *****************************************//
// let historyStructure = `<h3 class="font-bold text-xl text-[#111111] mb-4">
//             ${amount} Taka is Donated for ${eventName}
//           </h3>
//           <p class="text-[#111111B3] font-light text-base">
//             Date:${formattedDate}
//           </p>
//         `;
// *******************************************************************************
let header = document.getElementsByTagName("nav")[0]; // Access the first nav element

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("bg-opacity-80", "backdrop-blur-2xl");
    // header.classList.remove("bg-[#F9F7F3]");
  } else {
    header.classList.remove("bg-opacity-80", "backdrop-blur-2xl");
    // header.classList.add("bg-[#F9F7F3]");
  }
});
