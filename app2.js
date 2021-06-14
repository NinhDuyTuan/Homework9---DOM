
let numberclick = 0;

// bai 1
let btn1 = document.getElementById("click-me1");
let hideBlock = document.getElementById("hide-block");
btn1.onclick = function () {
    if (numberclick % 2 == 0) {
        hideBlock.style.display = "none";        
    }else{
        hideBlock.style.display = "block" ;
    }
    numberclick++;
}


//task2 : đổi màu block
let btn2 = document.getElementById("click-me2");
let changeColor = document.getElementById("change-color");
let color=[
    "blue","purple","orange","violet","black",,"pink"
]
btn2.onclick = function(){
    let randomColor=Math.floor(Math.random()*color.length);
    let change = color[randomColor];
    changeColor.style.background = change;
    
}

//task3 : đảo nội dung 2 element
let btn3 = document.getElementById("click-me3");
let text1=document.getElementById("text1");
let text2=document.getElementById("text2");

btn3.onclick = function(){
    let sub = text1.textContent;
    text1.textContent = text2.textContent;
    text2.textContent = sub;
}

// //task4: thay đổi size chữ
let btn4=document.getElementById("click-me4");
let changeSize = document.getElementById("change-size");
let size = 15;
btn4.onclick = function(){   
    changeSize.style.fontSize = size;
    size++;    
}





