let select=document.querySelector("div");

let newDiv=document.createElement("div");

let content=document.createElement("p");

content.textContent=("HEllo, this is javascript at work.";

select.appendChild(newDiv);

newDiv.appendChild(content);
let x=0;

console.log("hi");
function click(){
  alert(x);
  x++;
  
}
let selector=document.querySelector(".magic-button")
selector.onclick=click
  
