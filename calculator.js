let buttons=document.querySelectorAll(".btn1")
let str=""
buttons.forEach((value)=>{
value.addEventListener("click",function(e){
    let data=e.target.id
    if(data=='='){
        str=eval(str)
    }
    else if(data=='C'){
        str=""
    }
    else if(data=='X'){
        str=str.slice(0,str.length-1)
}
   else{
str=str+data
  }
   document.querySelector(".textArea").innerHTML=str

})
})
