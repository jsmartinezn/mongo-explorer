const formSearch = document.querySelector("#search");

const onSearch = evt => {
  const query = document.querySelector("#base-select");
  console.log("hola", query.option);

  evt.preventDefault();
};
formSearch.addEventListener("submit", onSearch);
