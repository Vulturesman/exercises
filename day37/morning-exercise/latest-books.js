console.log("hello");

const loadData = async () => {
  // loader ->
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  // loader <-

  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php"
  );
  const data = await response.json();

  // loader ->
  loader.style.display = "none";
  // loader <-

  //   console.log(data);

  const bookId = document.getElementById("latest-books");

  data.forEach(({ title, slug, description, image, authors }) => {
    const bookElement = document.createElement("li");
    bookElement.innerHTML = `
        <h2>${title}</h2>
        <h4>By: ${authors[0].name}</h4>
        <p>${description}</p>
        <img src="${image}" alt="${slug}">
        `;

    bookId.appendChild(bookElement);
  });
};

loadData();
