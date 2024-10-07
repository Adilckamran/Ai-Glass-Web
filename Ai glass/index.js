const uploadedImage = document.getElementById('uploadedImage');
const spectaclesImage = document.getElementById('spectaclesImage');
let scaleFactor = 1;
let position = { top: 0, left: 0 };

// Upload Image
document.getElementById('imageUpload').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        uploadedImage.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
});

// Select Spectacles
function selectSpectacles(src) {
    spectaclesImage.src = src;
}
// how to use an image
// Change size of spectacles
function changeSize(action) {
    if (action === 'increase') {
        scaleFactor += 0.1;
    } else if (action === 'decrease') {
        scaleFactor -= 0.1;
    }
    spectaclesImage.style.transform = `scale(${scaleFactor})`;
}

// Move spectacles
function moveSpectacles(direction) {
    switch (direction) {
        case 'left':
            position.left -= 3;
            break;
        case 'right':
            position.left += 3;
            break;
        case 'up':
            position.top -= 5;
            break;
        case 'down':
            position.top += 5;
            break;
    }
    spectaclesImage.style.top = `${position.top}px`;
    spectaclesImage.style.left = `${position.left}px`;
}