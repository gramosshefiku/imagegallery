const defaultImage = document.getElementById('default-image');
const smallImages = document.querySelectorAll('.small-images img');

async function changeDefaultImage(event) {
  const smallImage = event.target;
  const defaultImageUrl = smallImage.src.replace('-url.jpg', '.jpg');

  const image = new Image();
  image.src = defaultImageUrl;

  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });

  defaultImage.src = defaultImageUrl;
}

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener('click', changeDefaultImage);
}
