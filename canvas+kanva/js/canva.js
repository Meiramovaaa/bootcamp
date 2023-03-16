$(init)
function init(){
    

    let diagram = []
    let canvas = $(".canvas")
    let tools = $(".figures")
    
    const div = document.getElementById("container")
    var width = div.clientWidth;
    var height = div.clientHeight;

    var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
    });

    var layer = new Konva.Layer();


    // var rectX = stage.width() / 2 - 50;
    // var rectY = stage.height() / 2 - 25;

    // var box = new Konva.Rect({
    //   x: rectX,
    //   y: rectY,
    //   width: 100,
    //   height: 100,
    //   fill: 'rgb(167, 209, 246)',
    //   draggable: true,
    // });

    $(".tool").draggable({
        helper: "clone"
    })

    // box.on('dragstart', function() {
    //     box.stopDrag();

    //     var clone = box.clone({
    //         x : rectX,
    //         y : rectY
    //     });

    //     clone.off('dragstart');
    
       
    //     layer.add(clone);
    //     clone.startDrag();
    // });

    // layer.add(box);
    // stage.add(layer);

    
   
    




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
            renderDiagram(diagram, event)
            document.querySelector(".canvas-object").innerHTML = JSON.stringify(diagram, null, 2) 
            
        }
    })
    function renderDiagram(diagram, e){
        // canvas.empty()
        for(let d in diagram){
            let node = diagram[d]
            let html = ""
            if(node.type == "square"){
                console.log(('Work'));
                var box = new Konva.Rect({
                    x: e.offsetX,
                    y: e.offsetY,
                    width: 100,
                    height: 100,
                    fill: 'rgb(167, 209, 246)',
                    draggable: true,
                  });
                  console.log(box);
                  console.log(diagram[d].position);
                    layer.add(box);
                    
                // html = `
                // <div class="square tool" id="el1" >
                //     <p>Task</p> 
                // </div>
                // `
            }else if(node.type == "circle"){
                html = `
                <div class="circle tool" id="el2" >
                    <p>Email</p>
                </div>
                `
            } else if(node.type == "triangle"){
                html = `
                <div class="triangle tool" id="el3" >
                    <p>Note</p>
                </div>
                `
            }else if(node.type == "arrow"){
                html = `
                <div class="arrow tool" id="el4" >

                </div>
                `
            }
            // let dom = $(html).css({
            //     "position":"absolute",
            //     "top": node.position.top,
            //     "left": node.position.left
            // })
            // canvas.append(dom)
        }

        stage.add(layer);
    }

    // function addChildLine(options) {
    //     canvas.off('object:selected', addChildLine);
        
    //     // add the line
    //     var fromObject = canvas.addChild.start;
    //     var toObject = options.target;
    //     var from = fromObject.getCenterPoint();
    //     var to = toObject.getCenterPoint();
    //     var line = new fabric.Line([from.x, from.y, to.x, to.y], {
    //         fill: 'red',
    //         stroke: 'red',
    //         strokeWidth: 5,
    //         selectable: false
    //     });
    //     canvas.add(line);
    //     // so that the line is behind the connected shapes
    //     line.sendToBack();
        
    //     // add a reference to the line to each object
    //     fromObject.addChild = {
    //         // this retains the existing arrays (if there were any)
    //         from: (fromObject.addChild && fromObject.addChild.from) || [],
    //         to: (fromObject.addChild && fromObject.addChild.to)
    //     }
    //     fromObject.addChild.from.push(line);
    //     toObject.addChild = {
    //         from: (toObject.addChild && toObject.addChild.from),
    //         to: (toObject.addChild && toObject.addChild.to) || []
    //     }
    //     toObject.addChild.to.push(line);
        
    //     // to remove line references when the line gets removed
    //     line.addChildRemove = function () {
    //         fromObject.addChild.from.forEach(function (e, i, arr) {
    //             if (e === line)
    //                 arr.splice(i, 1);
    //         });
    //         toObject.addChild.to.forEach(function (e, i, arr) {
    //             if (e === line)
    //                 arr.splice(i, 1);
    //         });
    //     }
    //     canvas.addChild = undefined;
    //     }
        
    //     function addChildMoveLine(event) {
    //         canvas.on(event, function (options) {
    //             var object = options.target;
    //             var objectCenter = object.getCenterPoint();
    //             // udpate lines (if any)
    //             if (object.addChild) {
    //                 if (object.addChild.from)
    //                     object.addChild.from.forEach(function (line) {
    //                         line.set({ 'x1': objectCenter.x, 'y1': objectCenter.y });
    //                     })
    //                     if (object.addChild.to)
    //                         object.addChild.to.forEach(function (line) {
    //                             line.set({ 'x2': objectCenter.x, 'y2': objectCenter.y });
    //                         })
    //                         }
        
    //             canvas.renderAll();
    //         });
    //     }
}

