const slideImg = document.querySelector('.main-img');
const images = [
  'images/class1.jpeg',
  'images/school.jpeg',
  'images/main.png',
];
let imgIndex = 0;

const showImg = () => {
  if (imgIndex < 0) {
    imgIndex = images.length - 1;
  } else if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  console.log(imgIndex);
  slideImg.innerHTML = `
    <img src = "${images[imgIndex]}">
    `;
  imgIndex++;
};
setInterval(showImg, 3000);

showImg(imgIndex);
