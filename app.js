const container = document.querySelector(".container");



for(let i=0; i<256; i++){
    const div = document.createElement("div");
    container.append(div);
    div.setAttribute("class","box");
}

const boxes = document.querySelectorAll(".box");

for(let i=0; i<boxes.length;i++){
    console.log(boxes[i].className);

    boxes[i].addEventListener("mouseover",()=>{
        boxes[i].style.backgroundColor = "lightBlue";
    });
}
