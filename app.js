function createGrid(size = 256,width_height = 30){
    const container = document.querySelector(".container");
    for(let i=0; i<size; i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.style.width = width_height;
        box.style.height = width_height;
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

function removeBoxes(){
    const boxes = document.querySelectorAll(".box");

    for(let i = 0 ; i<boxes.length; i++){
        boxes[i].remove();
    }
}

function newGrid(){
    let input = Number(prompt("Enter a size for the grid( <100 ) "));
    let size = input * input;
    let width_height = 480/input;

    width_height += "px";
    console.log(width_height);

    const newContainer = createGrid(size, width_height);

}   

const btn = document.querySelector("#btn-newGrid");

const container = createGrid();
setEventListener(container);

container = btn.addEventListener("click", ()=>{
    removeBoxes();
    const newContainer = newGrid();
    setEventListener(newContainer);
});
