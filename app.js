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

function toggleDefaultMode(container){
    const boxes = document.querySelectorAll(".box");
    
    for(let i=0; i<boxes.length; i++){
        boxes[i].style.opacity = "100%";
        boxes[i].addEventListener("mouseover", ()=>{
            boxes[i].style.opacity = "100%";
            boxes[i].style.backgroundColor = "grey";
        });
    }
}

function toggleEraser(container){
    const boxes = document.querySelectorAll(".box");
    
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("mouseover", ()=>{
            boxes[i].style.opacity = "100%";
            boxes[i].style.backgroundColor = "white";
        });
    } 
}

function toggleColor(container){
    const boxes = document.querySelectorAll(".box");
    
    for(let i=0; i<boxes.length; i++){

        boxes[i].addEventListener("mouseover", ()=>{
            boxes[i].style.opacity = "100%";
            boxes[i].style.backgroundColor = "rgb(" + randomInt() +","
                             +randomInt() + "," + randomInt() + ")";
        });
    }
}

function toggleShading(container){
    const boxes = document.querySelectorAll(".box");

    for(let i=0; i<boxes.length; i++){
        let value = 10;

        boxes[i].addEventListener("mouseover", ()=>{
            boxes[i].style.backgroundColor = "black";
            boxes[i].style.opacity = value +"%";
            value += 10;
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
    let input;
    do{
        input = Number(prompt("Enter a size for the grid( <100 ) "));
        if(input > 100){
            continue;
        }else{
            break;
        }
    }while(true);

    let size = input * input;
    let width_height = 480/input;

    width_height += "px";
    const newContainer = createGrid(size, width_height);

}

//generating a number between 0 - 254
function randomInt(){
    return Math.floor(Math.random() * 254);

}

const btn_newGrid = document.querySelector("#btn-newGrid");
const btn_eraser = document.querySelector("#btn-eraser");
const btn_default = document.querySelector("#btn-default");
const btn_color = document.querySelector("#btn-color");
const btn_shading = document.querySelector("#btn-shading");

const container = createGrid();
toggleDefaultMode(container);

btn_newGrid.addEventListener("click", ()=>{
    removeBoxes();
    const newContainer = newGrid();
    toggleDefaultMode(newContainer);
});


btn_eraser.addEventListener("click", ()=>{
    toggleEraser(container);
});

btn_shading.addEventListener("click", ()=>{
    toggleShading(container);
});

btn_default.addEventListener("click", ()=>{
    toggleDefaultMode(container);
});

btn_color.addEventListener("click", ()=>{
    toggleColor(container);
});



console.log(randomInt());    