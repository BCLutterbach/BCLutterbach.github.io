document.addEventListener("DOMContentLoaded", () => {
    const images = [
        
        "images/carrousel/slide2.jpg",
        "images/carrousel/slide3.jpg",
        "images/carrousel/slide4.jpg"
    ];

    const carouselContent = document.getElementById("carouselContent");

    images.forEach((src, index) => {
        const div = document.createElement("div");
        div.classList.add("carousel-item");
        if (index === 0) div.classList.add("active");
        div.innerHTML = `<img src="${src}" class="d-block w-100" alt="Slide ${index + 1}">`;
        carouselContent.appendChild(div);
    });
});
