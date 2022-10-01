// Images

const setOfImages = [
  "./Assets/jett.jpg",
  "./Assets/killjoy.jpg",
  "./Assets/omen.jpg",
  "./Assets/phoenix.jpg",
  "./Assets/skye.jpg",
  "./Assets/viper.jpg"
];

// Randomized images
let generatedNumbers = [];

function generate() {
  for (let i = 0; i < 6; i++) {
    let gen = Math.floor(Math.random() * 6);
    generatedNumbers.push(gen);
  }
}

// Generate images

const container = document.querySelector(".container-box .row");

function generateImages() {

  for (let j = 0; j < generatedNumbers.length; j++) {
    let div = document.createElement("div");
    div.classList.add("col-lg-4", 'col-6', "box");
    let img = document.createElement("img");
    img.classList.add("img-fluid", "hide");
    img.setAttribute("src", setOfImages[generatedNumbers[j]]);
    div.append(img);
    container.append(div);
  }
}

let scoreCount = 0;
let failCount = 0;

function guess() {
    let firstGuess = "";
    let secondGuess = "";
    const boxes = document.querySelectorAll(".box");
    const images = document.querySelectorAll(".box img");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", () => {
         
          if (!firstGuess) {
            images[i].classList.remove("hide");
            firstGuess = images[i].src;
          } else if (!secondGuess) {
            images[i].classList.remove("hide");
            secondGuess = images[i].src;
            if (firstGuess === secondGuess) {
                scoreCount += 1;
                let score = document.querySelector('.score');
                score.textContent = scoreCount;
            } else {
                let fail = document.querySelector('.fail');
                failCount += 1;
                fail.textContent = failCount;
            }
          } else {
            // reset Everything
            generatedNumbers = [];
      
            generate();
            container.replaceChildren();
      
            generateImages();
            guess();
          }
        });
      }

}


// Initial load
generate();
generateImages();
guess();
