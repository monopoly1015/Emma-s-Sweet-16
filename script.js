// Function to load images from the images/ folder
function loadImages() {
  const imageContainer = document.getElementById('image-container');

  // Fetch the list of images from the images/ folder
  fetch('images/')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');

      // Extract all image file links
      const imageFiles = Array.from(htmlDoc.querySelectorAll('a'))
        .map(link => link.href)
        .filter(href => href.match(/\.(jpg|jpeg|png|gif)$/i)); // Include .jpeg files

      // Display each image
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

// Load images when the page loads
window.onload = loadImages;
