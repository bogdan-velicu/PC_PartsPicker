document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/galerie_json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const images = data.imagini;
      const gallery = document.querySelector(".dynamic-gallery");

      // Random number of images, divisible by 3, less than 16
      let numImages;
      do {
        numImages = Math.floor(Math.random() * 15) + 1;
      } while (numImages % 3 !== 0 || numImages >= 16);

      // Random offset
      const offset = Math.floor(Math.random() * (images.length - numImages));

      const selectedImages = images.slice(offset, offset + numImages);

      const galleryInner = document.createElement("div");
      galleryInner.className = "dynamic-gallery-inner";

      console.info("Selected images:", selectedImages);

      for (let i = 0; i < selectedImages.length; i++) {
        const item = document.createElement("figure");
        item.className = "dynamic-gallery-item";
        item.style.animationDelay = i * 3 + "s";

        const picture = document.createElement("picture");
        const img = document.createElement("img");
        img.src = selectedImages[i].cale_relativa;
        img.alt =
          selectedImages[i].alternativ || selectedImages[i].descriere_imag;
        img.title = selectedImages[i].cale_relativa;

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = `${selectedImages[i].descriere_imag}`;

        picture.appendChild(img);

        item.appendChild(picture);
        item.appendChild(figcaption);

        galleryInner.appendChild(item);
      }

      gallery.appendChild(galleryInner);
    });
});
