document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(
    "https://classes.codingbootcamp.cz/assets/classes/602/guardian.php"
  );
  const data = await response.json();
  const nav = document.querySelector(".navigation");

  data.data.forEach((category) => {
    const a = document.createElement("a");
    a.textContent = category;
    nav.appendChild(a);

    a.addEventListener("click", () => {
      loadArticles(category);
    });
  });
});

const loadArticles = async (category) => {
  const response = await fetch(
    `https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`
  );
  const data = await response.json();

  const articleList = document.getElementById("articleList");
  articleList.innerHTML = "";

  data.data.channel.item.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.title} + link <a href="${item.link}"> HERE.`;
    articleList.appendChild(listItem);
  });
};
