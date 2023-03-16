$(init)
function init(){
    let diagram = []
    let canvas = $(".canvas")
    $(".tool").draggable({
        helper: "clone"
    })
    
    canvas.droppable({
        drop:function(event, ui){
            let node = {
                _id:(new Date).getTime(),
                position:ui.helper.position()
            }
            if(ui.helper.hasClass("square")){
                node.type = "square"
                node.text = 'Task'
            }else if(ui.helper.hasClass("circle")){
                node.type = "circle"
                node.text = 'Email'
            }else if(ui.helper.hasClass("triangle")){
                node.type = "triangle"
                node.text = 'Note'
            }else if(ui.helper.hasClass("arrow")){
                node.type = "arrow"
            }else{
                return
            }
            diagram.push(node)
            console.log(diagram);
            renderDiagram(diagram)
            document.querySelector(".canvas-object").innerHTML = JSON.stringify(diagram, null, 2) 
        }
    })
    function renderDiagram(diagram){
        canvas.empty()
        for(let d in diagram){
            let node = diagram[d]
            let html = ""
            if(node.type == "square"){
                html = `
                <div class="square elem" id="el1">
                    <p>Task</p> 
                </div>
                `
            }else if(node.type == "circle"){
                html = `
                <div class="circle elem " id="el2" >
                    <p>Email</p>
                </div>
                `
            } else if(node.type == "triangle"){
                html = `
                <div class="triangle elem " id="el3" >
                    <p>Note</p>
                </div>
                `
            }else if(node.type == "arrow"){
                html = `
                <div class="arrow elem " id="el4" >

                </div>
                `
            }
            


            let dom = $(html).css({
                "position":"absolute",
                "top": node.position.top,
                "left": node.position.left
            })
            if(dom.hasClass("elem")){
                console.log('df;k');
                dom.draggable()
            }
            // if(dom.hasClass("arrow")){
            //     dom.draggable().resizable({
            //         maxHeight:2,
            //         maxWidth:400,
            //         minHeight:2,
            //         // minWidth:130
            //     });
            // }
            canvas.append(dom)
        }
    }


}

