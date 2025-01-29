// Function to handle image uploads
function uploadImages(event) {
  const files = event.target.files;
  const imageContainer = document.getElementById('image-container');

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
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

// Trigger file input when the page loads
window.onload = function () {
  fileInput.click();
};

document.body.appendChild(fileInput);