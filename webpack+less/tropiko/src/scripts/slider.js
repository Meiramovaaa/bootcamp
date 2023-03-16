const slideImg = document.querySelector('.slide-img')
const images = [
    'images/slide-img1.png',
    'images/logo.png',
    'images/serv-1.png'
];
let imgIndex = 0
let output = ""
let numOf = 0
const showImg = () =>{
    if(imgIndex < 0){
        imgIndex = images.length - 1
    }else if(imgIndex >= images.length){
        imgIndex = 0
    }
    console.log(imgIndex);
    slideImg.innerHTML = `
    <img src = "${images[imgIndex]}">
    `
    imgIndex++

}
setInterval(showImg , 3000)

showImg(imgIndex)
