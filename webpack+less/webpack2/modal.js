const modalWindow = document.querySelector(".modal-window")
const open = document.getElementById("open")
const close = document.getElementById("close")
const close1 = document.getElementById("close1")
open.onclick = () =>{
    modalWindow.classList.add("active")
}

close.onclick = () =>{
    modalWindow.classList.remove("active")
}

close1.onclick = () =>{
    modalWindow.classList.remove("active")
}

