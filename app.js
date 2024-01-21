const faqs = document.querySelectorAll(".accordion__wrapper");


faqs.forEach((accordion__wrapper) => {
  accordion__wrapper.addEventListener("click", () => {
    accordion__wrapper.classList.toggle("active");

console.log(accordion__wrapper.value());
  });
});
