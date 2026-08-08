const moodRows = document.querySelectorAll(".mood-row");
const recommendationImage = document.querySelector(".recommendation-image");
const recommendationTitle = document.querySelector(".recommendation-content h3");
const recommendationDescription = document.querySelector(".recommendation-description");
const recommendationHint = document.querySelector(".recommendation-hint");
const recommendationLabel = document.querySelector(".recommendation-image-label");

const dishes = {
  comfort: {
    name: "Daal Chawal",
    image: "assets/daal.jpg",
    alt: "Daal Chawal served with rice",
    description: "Simple, humble, and somehow exactly what you needed.",
    hint: "A familiar plate for a comforting day.",
    label: "A simple classic"
  },
  spicy: {
    name: "Biryani",
    image: "assets/biryani.jpg",
    alt: "A plate of Pakistani biryani",
    description: "Fragrant rice, tender meat, and bold spices layered into one unforgettable plate.",
    hint: "A little heat, a lot of comfort.",
    label: "For the spice lovers"
  },
  slow: {
    name: "Nihari",
    image: "assets/nihari.jpg",
    alt: "A bowl of rich Pakistani nihari",
    description: "Slow-cooked, rich, and deeply comforting. The kind of meal worth waking up early for.",
    hint: "Made patiently, just like home.",
    label: "Slow and soulful"
  },
  nostalgic: {
    name: "Paratha & Chai",
    image: "assets/chai-paratha.jpg",
    alt: "Paratha served with a cup of chai",
    description: "Crisp, buttery paratha with a warm cup of chai. Some mornings need nothing more.",
    hint: "A taste that brings an old memory back.",
    label: "A little nostalgia"
  }
};
Object.values(dishes).forEach((dish) => {
  const img = new Image();
  img.src = dish.image;
});
function updateRecommendation(key) {
  const dish = dishes[key];

  if (!dish) return;

  recommendationImage.style.opacity = "0";
  recommendationTitle.style.opacity = "0";
  recommendationDescription.style.opacity = "0";

  const newImage = new Image();

  newImage.src = dish.image;

  newImage.onload = () => {
    recommendationImage.src = dish.image;
    recommendationImage.alt = dish.alt;

    recommendationTitle.textContent = dish.name;
    recommendationDescription.textContent = dish.description;
    recommendationHint.textContent = dish.hint;
    recommendationLabel.textContent = dish.label;

    recommendationImage.style.opacity = "1";
    recommendationTitle.style.opacity = "1";
    recommendationDescription.style.opacity = "1";
  };
}

moodRows.forEach((row) => {
  row.addEventListener("click", () => {
    moodRows.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    row.classList.add("active");
    row.setAttribute("aria-pressed", "true");
    updateRecommendation(row.dataset.dish);
    document.querySelector(".recommendation").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
