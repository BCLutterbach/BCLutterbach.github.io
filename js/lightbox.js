document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".lightbox-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", e => {
      e.preventDefault();
      const imgSrc = trigger.getAttribute("href");

      const overlay = document.createElement("div");
      overlay.classList.add("lightbox-overlay");

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = "Agrandissement";
      overlay.appendChild(img);

      const closeBtn = document.createElement("span");
      closeBtn.classList.add("lightbox-close");
      closeBtn.innerHTML = "&times;";
      overlay.appendChild(closeBtn);

      document.body.appendChild(overlay);

      closeBtn.addEventListener("click", () => {
        overlay.remove();
      });

      overlay.addEventListener("click", e => {
        if (e.target === overlay) overlay.remove();
      });
    });
  });
});
