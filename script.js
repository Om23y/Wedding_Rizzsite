function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const FAQItems = document.querySelectorAll(".FAQ");

  FAQItems.forEach((FAQItem) => {
    FAQItem.addEventListener("click", () => {
      FAQItem.classList.toggle("active");
    });
  });
  
  