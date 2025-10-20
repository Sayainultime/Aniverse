let slideIndex = 1;
let slideTimeout;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    clearTimeout(slideTimeout);
    slideIndex += n;
    showSlides(slideIndex);
    autoSlides(); // relance le défilement auto
}

function autoSlides() {
    slideTimeout = setTimeout(() => {
        plusSlides(1);
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    autoSlides();

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => plusSlides(-1));
        nextBtn.addEventListener("click", () => plusSlides(1));
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("resultsContainer");
  const searchIcon = document.querySelector(".search-icon");

  const mangas = [
    "One Piece",
    "Naruto",
    "Bleach",
    "Demon Slayer",
    "Attack on Titan",
    "My Hero Academia",
    "Chainsaw Man",
    "Jujutsu Kaisen",
    "Solo Leveling",
    "Tokyo Ghoul",
    "Dragon Ball Z"
  ];

  function searchManga() {
    const query = searchInput.value.toLowerCase().trim();
    resultsContainer.innerHTML = ""; // vide les anciens résultats

    if (query === "") return;

    const filtered = mangas.filter(manga =>
      manga.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      resultsContainer.innerHTML = "<div>Aucun résultat trouvé.</div>";
      return;
    }

    filtered.forEach(manga => {
      const resultItem = document.createElement("div");
      resultItem.textContent = manga;
      resultItem.style.padding = "5px 0";
      resultsContainer.appendChild(resultItem);
    });
  }

  // Clic sur l'icône
  if (searchIcon) {
    searchIcon.addEventListener("click", searchManga);
  }

  // Appui sur Entrée
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // empêche un rechargement éventuel
      searchManga();
    }
  });
});
