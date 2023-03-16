let cards = document.querySelectorAll(' .card');
let data = [];
let dragSrcEl = null;
let dragSrcCard = null;
$('.cards').append(`
        <div class="add-btn" onclick="addList()">
            <a>+ Добавить список</a>
        </div>
`)

function addList(){
    $('.add-btn').remove();
    if(document.querySelector('.form')){
        document.querySelector('.form').remove()
    }
    document.querySelectorAll('.card').forEach(item => {
        item.querySelector('.card-footer').innerHTML =`
            <div class="card-body-btn" onclick="addTask(event, this)">
                <a>+ Add a card</a>
            </div>
        `
    })
    $('.cards').append(`
        <div class="card" draggable="true">
            <div class="card-header">
                <input type="text" class="list-title">
                <div class="card-btns">
                    <div class="card-btn" onclick="saveList(this)">
                        <a>Add list</a>
                    </div>
                    <a href="">X</a>
                </div>
            </div>
            <div class="card-body"></div>
            <div class="card-footer"></div>
        </div>
    `)

    $('.cards').append(`
        <div class="add-btn" onclick="addList()">
            <a>+ Добавить список</a>
        </div>
    `)
}
function saveList(el){
    console.log(el)
    let val = $('.list-title').val()
    let cardHead = el.parentElement.parentElement
    let card = cardHead.parentElement
    let footer = card.querySelector('.card-footer')
    console.log(footer);
    cardHead.innerHTML = `
        <p>${val}</p>
    `
    footer.innerHTML = `
        <div class="card-body-btn" onclick="addTask(event, this)">
            <a>+ Add a card</a>
        </div>
    `
    const id = Date.now()
    data.push({
        id,
        title: val,
        order: data.length + 1,
        items: []
    })

    card.id = id;

    addDragAndDropListnersToLists(card)
}
function clickToForm(e) {
    e.stopPropagation();
}
function addTask(e, el){
    e.preventDefault()
    console.log(e, el)
    let card = el.parentElement.parentElement;
    document.querySelectorAll('.card').forEach(item => {
        console.log(item);
        if(item !== card){
            item.querySelector('.card-footer').innerHTML =`
                    <div class="card-body-btn" onclick="addTask(event, this)">
                        <a>+ Add a card</a>
                    </div>
            `
        }
    })
    // if(document.querySelector('.form')){
    //     document.querySelector('.form').remove()
    // }
    card.querySelector('.card-footer').innerHTML = `
        <div class="form" onclick="clickToForm(event)">
            <textarea class="card-text" placeholder="Enter a title for this card..."></textarea>
            <div class="card-btns">
                <div class="card-btn" onclick="addCard(event, this)">
                    <a>Add card</a>
                </div>
                <a href="">X</a>
            </div>
        </div>
    `
}
function addCard(e, el){
    let card = el.parentElement.parentElement.parentElement.parentElement;
    let val = document.querySelector('.card-text').value


    let list = getListById(card.id)
    const id = Date.now();
    list.items.push({
        id,
        name: val,
        order: list.items.length + 1
    });

    card.querySelector('.card-body').innerHTML += `
        <div draggable="true" class="card-item" id="${id}">
            <p>${val}</p>
        </div>
    `
    const newTask = document.getElementById(`${id}`);
    addDragAndDropListnersToLists(newTask)

    document.querySelector('.card-text').value = "";
}


function getListById(id) {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id==id) return data[i]
    }
}

function getTaskAndListByTaskId(id) {
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].items.length; j++) {
            if(data[i].items[j].id==id) return {
                task: data[i].items[j],
                list: data[i],
                taskIndex: j
            }
        }
    }
}

function handleDragStart(e) {
        e.stopPropagation();
        console.log("!!!!!!", this)
        this.style.opacity = '0.4';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
      }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }

    
    function handleDrop(e) {
        e.stopPropagation();

        if (dragSrcEl !== this && dragSrcEl.classList.contains('card') && this.classList.contains('card')) {
            // dragSrcEl.innerHTML = this.innerHTML;
            // this.innerHTML = e.dataTransfer.getData('text/html');

            let draggableList = getListById(dragSrcEl.id)
            let droppebleList = getListById(this.id)
            let draggableListInitialOrder = draggableList.order;
            let droppebleListInitialOrder = droppebleList.order;
            console.log(draggableList, droppebleList);
            if(draggableList.order > droppebleList.order) {
                console.log("1")
                draggableList.order = droppebleList.order;
                console.log("draggableList.order", draggableList.order, droppebleList.order)
                for(let i = 0; i < data.length; i++) {
                    console.log("?", data[i].order)
                    if(data[i].order > droppebleListInitialOrder && data[i].order < draggableListInitialOrder) {
                        data[i].order++;
                        console.log("2", data[i].order)
                    }
                }
                droppebleList.order++;
                console.log("droppebleList.order", draggableList.order, droppebleList.order)
            } else if(draggableList.order < droppebleList.order) {
                draggableList.order = droppebleList.order;
                for(let i = 0; i < data.length; i++) {
                    if(data[i].order < droppebleListInitialOrder && data[i].order > draggableListInitialOrder) {
                        data[i].order--;
                    }
                }
                droppebleList.order--;
            }

            console.log(data);

            showList();
        } else if(dragSrcEl !==this && this.classList.contains('card-item') && dragSrcEl.classList.contains('card-item')) {
            const {task: draggableTask, list: draggableList, taskIndex: draggableTaskIndex} = getTaskAndListByTaskId(dragSrcEl.id)
            const {task: droppableTask, list: droppableList} = getTaskAndListByTaskId(this.id)
            droppableList.items.push(draggableTask);
            draggableList.items.splice(draggableTaskIndex, 1);

            
            if(draggableList.id === droppableList.id) {
                let draggableTaskInitialOrder = draggableTask.order;
                let droppebleTaskInitialOrder = droppableTask.order;
                console.log("TUT", draggableTask, droppableTask)
                if(draggableTask.order > droppableTask.order) {
                    draggableTask.order = droppableTask.order; 
                    for(let i = 0; i < draggableList.items.length; i++) {
                        if(draggableList.items[i].order > droppebleTaskInitialOrder && draggableList.items[i].order < draggableTaskInitialOrder) {
                            draggableList.items[i].order++;
                        }
                    }
                    droppableTask.order++;
                } else if(draggableTask.order < droppableTask.order) {
                    draggableTask.order = droppableTask.order;
                    for(let i = 0; i < draggableList.items.length; i++) {
                        if(draggableList.items[i].order < droppebleTaskInitialOrder && draggableList.items[i].order > draggableTaskInitialOrder) {
                            draggableList.items[i].order--;
                        }
                    }
                    droppableTask.order--;
                }
            } else {
                let draggableTaskInitialOrder = draggableTask.order;
                let droppebleTaskInitialOrder = droppableTask.order;
                draggableList.items.forEach(item => {
                    if(item.order > draggableTaskInitialOrder) item.order--;
                })
                droppableList.items.forEach(item => {
                    if(item.order >= droppebleTaskInitialOrder) item.order++;
                })
                draggableTask.order = droppebleTaskInitialOrder;
            }



            showList();
        } else if(dragSrcEl !==this && this.classList.contains('card') && dragSrcEl.classList.contains('card-item')) {
            const {task: draggableTask, list: draggableList, taskIndex: draggableTaskIndex} = getTaskAndListByTaskId(dragSrcEl.id)
            const droppableList = getListById(this.id)
            droppableList.items.push(draggableTask);
            draggableList.items.splice(draggableTaskIndex, 1);
            if(draggableList.id !== droppableList.id) {
                let draggableTaskInitialOrder = draggableTask.order;
                draggableList.items.forEach(item => {
                    if(item.order > draggableTaskInitialOrder) item.order--;
                })
                draggableTask.order = droppableList.items.length + 1;
            }
            showList();
        }


        return false;
      }
  

    function addDragAndDropListnersToLists(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    }
    

    function showList() {
        console.log("showList")
        const list = data.sort((a, b) => a.order - b.order)
        let cardsDiv = document.querySelector('.cards');
        cardsDiv.innerHTML = "";
        list.forEach(item => {
            cardsDiv.innerHTML += `
            <div class="card" draggable="true" id="${item.id}">
                <div class="card-header">
                    ${item.title}
                </div>
                <div class="card-body"></div>
                <div class="card-footer">
                    <div class="card-body-btn" onclick="addTask(event, this)">
                        <a>+ Add a card</a>
                    </div>
                </div>
            </div>
            `
            const card = document.getElementById(`${item.id}`);
            let cardBody = document.getElementById(`${item.id}`).querySelector('.card-body');
            item.items.sort((a, b) => a.order-b.order )
            item.items.forEach(card => {
                cardBody.innerHTML += `
                    <div draggable="true" class="card-item" id="${card.id}">
                        <p>${card.name}</p>
                    </div>`
            })

        });

        $('.cards').append(`
            <div class="add-btn" onclick="addList()">
                <a>+ Добавить список</a>
            </div>
        `)

        const newlists = document.getElementsByClassName('card');
        for(let i = 0; i < newlists.length; i++) {
            addDragAndDropListnersToLists(newlists[i])
        }

        const newtasks = document.getElementsByClassName('card-item');
        for(let i = 0; i < newtasks.length; i++) {
            addDragAndDropListnersToLists(newtasks[i])
        }
    }



