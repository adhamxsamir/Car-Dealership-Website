const images = [
    "pictures/car2.jpg",
    "pictures/car3.jpg",
    "pictures/redCar.jpg",
];

let currentIndex = 0; 
const changeInterval = 3000; 
const imageElement = document.getElementById("carimage");


function changePicture() {
    currentIndex = (currentIndex + 1) % images.length; 
    imageElement.src = images[currentIndex]; 
}


setInterval(changePicture, changeInterval);