const title = document.querySelectorAll("p");

title.forEach((title) => {
  if (title.innerHTML.includes("error")) {
    title.classList.add("error");
  }
  if (title.innerHTML.includes("success")) {
    title.classList.add("success");
  }
});
