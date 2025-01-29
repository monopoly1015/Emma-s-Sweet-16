// Function to load images from the images folder
function loadImages() {
  const imageContainer = document.getElementById('image-container');

  // Fetch the list of images from the images folder
  fetch('https://api.github.com/repos/monopoly1015/Emma-s-Sweet-16/contents/images')
    .then(response => response.json())
    .then(data => {
      // Filter for .jpeg files
      const imageFiles = data
        .filter(file => file.name.match(/\.(jpg|jpeg|png|gif)$/i)) // Include .jpeg files
        .map(file => file.download_url); // Get the direct download URL

      // Display each image
      imageFiles.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Event Photo";
        img.classList.add('gallery-image'); // Add a class for styling
        imageContainer.appendChild(img);
      });
    })
    .catch(error => console.error('Error loading images:', error));
}

// Load images when the page loads
window.onload = loadImages;
