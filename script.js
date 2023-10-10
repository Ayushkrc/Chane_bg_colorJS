let color=["lightblue","lightgreen","black","orange","cyan","lime","lightred"];
let index=0;
let btn=document.getElementById("btn");
btn.addEventListener("mouseover",function(){
    btn.style.transform
})

btn.addEventListener("click",changeColor);

function changeColor(){
    if(index==color.length){
        index=0;
    }

    document.body.style.backgroundColor=color[index];
    index++;
}