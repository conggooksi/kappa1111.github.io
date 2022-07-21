const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.getElementById("body");


bgImage.setAttribute("background", `./img/${chosenImage}`);

if (chosenImage == images[2]) {
    bgImage.style.color = "black";
} else {
    bgImage.style.color = "white";
}

