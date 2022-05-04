const images = ["images/cross.png","images/circle.png","images/triangle.png","images/square.png"]

let firstImage = document.createElement("img"),
secondImage = document.createElement("img"),
thirdImage = document.createElement("img"),
fourthImage = document.createElement("img");

let orderedImages = images.sort(() => Math.random() - 0.5);

firstImage.src = orderedImages[0];
secondImage.src = orderedImages[1];
thirdImage.src = orderedImages[2];
fourthImage.src = orderedImages[3];

let container = document.getElementById("container");

container.appendChild(firstImage);
container.appendChild(secondImage);
container.appendChild(thirdImage);
container.appendChild(fourthImage);

function hideLoader() {
  document.getElementById("container").style.display = "none";
  document.getElementsByClassName("loaded")[0].style.display = "block";
}
