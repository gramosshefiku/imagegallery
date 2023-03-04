const defaultImage = document.getElementById('default-image');
const smallImages = document.querySelectorAll('.small-images img');

smallImages.forEach((smallImage) => {
  smallImage.addEventListener('click', () => {
    const defaultImageUrl = smallImage.src.replace('-url.jpg', '.jpg');
    defaultImage.src = defaultImageUrl;
  });
});
