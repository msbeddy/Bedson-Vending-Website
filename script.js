console.log("JS is working");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  const name = form.querySelector("input[name='name']").value;
  const email = form.querySelector("input[name='email']").value;

  if (name.trim() === "" || email.trim() === "") {
    e.preventDefault();
    alert("Please fill out your name and email.");
  }
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

console.log(toggle); // IMPORTANT

toggle.addEventListener("click", () => {
  console.log("clicked!");
  nav.classList.toggle("active");
});