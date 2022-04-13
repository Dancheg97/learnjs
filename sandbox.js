const ul = document.querySelector(".people");

const people = ["first", "second", "third", "fourth"];

let html = ``;

people.forEach(function (person) {
  html += `<li style="color: purple">${person}</li>`;
});

console.log(people);
ul.innerHTML = html;
