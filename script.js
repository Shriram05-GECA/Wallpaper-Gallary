// Adjust grid items dynamically for masonry layout
window.addEventListener("load", () => {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img) => {
    img.onload = () => {
      const parentDiv = img.parentElement;
      const rowHeight = 10; // Same as grid-auto-rows value in CSS
      const rowSpan = Math.ceil(img.offsetHeight / rowHeight);
      parentDiv.style.gridRowEnd = `span ${rowSpan}`;
    };
  });
});
