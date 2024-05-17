function createGrid(size = 256){
    const container = document.querySelector(".container");
    for(let i=0; i<size; i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        container.appendChild(box);
    }

    return container;
}

function setEventListener(container){
    const boxes = document.querySelectorAll(".box");
    
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("mouseover", ()=>{
            boxes[i].style.backgroundColor = "lightblue";
        });
    }
}



const container = createGrid();
setEventListener(container);