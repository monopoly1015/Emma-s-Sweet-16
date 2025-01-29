// Function to load images from the images/ folder
function loadImages() {
  const imageContainer = document.getElementById('image-container');
  fetch('images/')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');
      const imageFiles = Array.from(htmlDoc.querySelectorAll('a'))
        .map(link => link.href)
        .filter(href => href.match(/\.(jpg|jpeg|png|gif)$/i));

      imageFiles.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = "Event Photo";
        img.classList.add('gallery-image'); // Add a class for styling
        imageContainer.appendChild(img);
      });
    })
    .catch(error => console.error('Error loading images:', error));
}

// Function to handle image uploads
function uploadImages(event) {
  const files = event.target.files;
  const imageContainer = document.getElementById('image-container');

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = "Uploaded Photo";
      img.classList.add('gallery-image'); // Add a class for styling
      imageContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}

// Add file input dynamically
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.multiple = true;
fileInput.style.display = 'none';
fileInput.addEventListener('change', uploadImages);

// Trigger file input when the page loads (optional)
window.onload = function () {
  loadImages(); // Load existing images from the images/ folder
  fileInput.click(); // Trigger file input for new uploads
};

document.body.appendChild(fileInput);
