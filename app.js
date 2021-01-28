// select items
const generateBtn = document.querySelector(".generate-btn");
const pinInput = document.getElementById("pin");
const pinMatchInput = document.getElementById("pinMatch");

const number = document.querySelectorAll(".num");
const clearBtn = document.querySelector(".clear");
const removeBtn = document.querySelector(".remove");
const submitBtn = document.querySelector(".submit-btn");

const actionLeft = document.querySelector(".action-left");
// generate pin
generateBtn.addEventListener("click", () => {
  pinInput.value = randomNumber();
});
// number button
number.forEach((num) => {
  num.addEventListener("click", () => {
    pinMatchInput.value += num.innerText;
  });
});
// clear button
clearBtn.addEventListener("click", () => {
  pinMatchInput.value = "";
});
// remove button
removeBtn.addEventListener("click", () => {
  pinMatchInput.value = pinMatchInput.value.slice(0, -1);
});
// submit button
let action = 0;
submitBtn.addEventListener("click", () => {
  const pin = pinInput.value;
  const pinMatch = pinMatchInput.value;

  if (!pin) {
    alert("Please generate pin first.");
  } else if (!pinMatch) {
    alert("Please inter your 4-digit pin");
  }
  if (pin == pinMatch && pin) {
    showMessage(true);

    pinInput.value = "";
    pinMatchInput.value = "";
  } else if (pin !== pinMatch && pinMatch && pin) {
    ++action;
    if (action == 1) {
      actionLeft.innerText = "2 Try Left";
    } else if (action == 2) {
      actionLeft.innerText = "1 Try Left";
    } else {
      actionLeft.innerText = "0 Try Left";
      action = 0;
      pinInput.value = "";
    }

    showMessage(false);
    pinMatchInput.value = "";
  }
});
// display message
function showMessage(event) {
  const success = document.querySelector(".success");
  const error = document.querySelector(".error");

  if (event) {
    success.style.display = "block";
    error.style.display = "none";
  } else {
    success.style.display = "none";
    error.style.display = "block";
    actionLeft.style.display = "block";
  }
  setTimeout(() => {
    success.style.display = "none";
    error.style.display = "none";
    actionLeft.style.display = "none";
  }, 2000);
}
// random number
function randomNumber() {
  return Math.floor(Math.random() * 9000) + 1000;
}
