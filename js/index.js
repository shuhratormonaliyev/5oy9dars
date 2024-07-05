const container = document.getElementById("container");
const loader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", () => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cars-pagination.onrender.com/all-countries"
      );
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      loader.style.display = "none";
    }
  };

  const displayData = (data) => {
    data.forEach((country) => {
      const card = document.createElement("div");
      card.className = "card";

      const image = document.createElement("img");
      image.src =
        country.flag_url ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pnDkVaxO8E_2gf2nRmInBZARIEgaC2ANlw&s";
      image.alt = country.name;

      const cardContent = document.createElement("div");
      cardContent.className = "card-content";

      const title = document.createElement("h3");
      title.textContent = country.name;

      card.appendChild(image);
      cardContent.appendChild(title);
      card.appendChild(cardContent);
      container.appendChild(card);
    });
  };

  fetchData();
});
