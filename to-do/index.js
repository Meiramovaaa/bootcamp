// let dragged;

// document.addEventListener("dragstart", (event) => {
//   // store a ref. on the dragged elem
//   dragged = event.target;
  
//   event.target.classList.add("dragging");
// });

// document.addEventListener("dragend", (event) => {
//   // reset the transparency
//   event.target.classList.remove("dragging");
// });

// /* events fired on the drop targets */
// document.addEventListener("dragover", (event) => {
//   // prevent default to allow drop
//   event.preventDefault();
// }, false);

// document.addEventListener("dragenter", (event) => {
//     console.dir(event.target)
//   // highlight potential drop target when the draggable element enters it
//   if (event.target.classList.contains("dropzone")) {
//     event.target.classList.add("dragover");
//   }
// });

// document.addEventListener("dragleave", (event) => {
//     // reset background of potential drop target when the draggable element leaves it
//     if (event.target.classList.contains("dropzone")) {
//       event.target.classList.remove("dragover");
//     }
// });
  
// document.addEventListener("drop", (event) => {
// event.preventDefault();
// if (event.target.classList.contains("dropzone")) {
//     event.target.classList.remove("dragover");
//     dragged.parentNode.removeChild(dragged);
//     event.target.appendChild(dragged);
//     event.stopPropagation();
// }
// });

// const btn = document.querySelector(".btn-add")
// const divNew = document.querySelector(".add-new")
// function addNewColumn (){
//     btn.classList.add("no-active")
//     divNew.classList.add("active")
// }
// let items = ''
// let newTask = document.getElementById("new-task-name")
// const divParent = document.querySelector(".board")

// const addingNewColumn = () =>{
//     divParent.innerHTML += `
//     <div class = "dropzone-item" draggable="true">
//     <div class="dropzone">
//         <h2 onclick="changeNameOfTask(event)">${newTask.value}</h2>
//         <input  name="" id="" type="hidden">
//         <div class="item-list">
            
//         </div>
        
//         <div onclick="addNewTask(event)" class="adding-task">
//             + Add new Task
//         </div>

//         <div class="add-task-item">
//             <input type="text" name="" id="">
//         </div>
//     </div>
//     </div>
//     `
//     newTask.value = ""
//     items = document.querySelectorAll(".board .dropzone-item")
//     function handleDragStart(e) {
//         // this.style.opacity = '0.4';
//         dragSrcEl = this;

//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/html', this.innerHTML);
//     }
    
//     function handleDragEnd(e) {
//         // this.style.opacity = '1';
//         items.forEach(function (item) {
//             item.classList.remove('over');
//         });
//     }
//     function handleDragOver(e) {
//         if (e.preventDefault) {
//           e.preventDefault();
//         }
    
//         return false;
//       }
    
//     function handleDragEnter(e) {
//     this.classList.add('over');
//     }

//     function handleDragLeave(e) {
//         this.classList.remove('over');
//     }
//     function handleDrop(e) {
//         e.stopPropagation();

//   if (dragSrcEl !== this) {
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');
//   }

//   return false;
//       }
//     items.forEach(function(item) {
//         item.addEventListener('dragstart', handleDragStart);
//         item.addEventListener('dragover', handleDragOver);
//         item.addEventListener('dragenter', handleDragEnter);
//         item.addEventListener('dragleave', handleDragLeave);
//         item.addEventListener('dragend', handleDragEnd);
//         item.addEventListener('drop', handleDrop);
//     });
// }


// const changeNameOfTask = (e) =>{
    
//     e.target.style.display = 'none'
    
//     e.target.nextElementSibling.type="text"
//     e.target.nextElementSibling.value = e.target.innerHTML


//     window.addEventListener('keyup', function(event) {
//         if (event.keyCode === 13) {
//             e.target.nextElementSibling.type="hidden"
//             e.target.style.display = 'block'
//             e.target.innerHTML = e.target.nextElementSibling.value
            
//         }
    
//     })
// } 


// const addNewTask = (e) =>{
//     e.target.nextElementSibling.style.display = 'block'
//     e.target.style.display = "none"

//     let addBtn =  e.target
//     let parentDiv = e.target.previousElementSibling

//     let inputDiv =  e.target.nextElementSibling;
//     let input = e.target.nextElementSibling.firstElementChild;


//     function keydownFunc() {
        
//         if (event.keyCode === 13) {
            
//             inputDiv.style.display = 'none'
//             addBtn.style.display = "block"
//             // console.dir(e.target.nextElementSibling.lastElementChild.value);
//             let parent =
//             `
//             <div class='item' id="draggable" draggable="true">
//                 ${e.target.nextElementSibling.lastElementChild.value}
//             </div>
//             `
            
            
//             parentDiv.innerHTML += parent
//             let items = document.querySelectorAll(".item")
            




            
//             e.target.nextElementSibling.lastElementChild.value = ""
//             event.defaultPrevented = "true"
            
//             input.removeEventListener('keydown', keydownFunc)

//         }
    
    
//     }
    
//     input.addEventListener('keydown', keydownFunc)

    
// }






