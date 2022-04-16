const elem = document.querySelector(".content");

console.log(elem.innerHTML);

elem.innerHTML += "<p>somestuff</p>";

console.log(elem.innerHTML);

const people = ["mario", "luigi", "yoshi"];

people.forEach((stuff) => {
  elem.innerHTML += `<p> some elem name is declared:${stuff} </p>`;
});
