import { confetti } from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";
const partypopper = document.querySelector(".partypopper");
const run = () => {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: {
      x: 0.5,
      y: 0.8,
    },
  });
};
partypopper.addEventListener("click", run);

// toast section here
const loginButton = document.getElementById("loginButton");
const toast = document.getElementById("toast");
loginButton.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter your username.");
  } else {
    // Show the toast message when the login button is clicked and username is entered
    toast.style.display = "block";
    // Hide the toast message after 2 seconds
    setTimeout(function () {
      toast.style.display = "none";
    }, 6000);
  }
});
// toast alert
