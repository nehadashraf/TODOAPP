let add=document.querySelector('.fa-plus');
let AddTask=document.querySelector('.AddTask');
let icon=document.querySelector('.container .row .fa-plus')
console.log(icon);
console.log(AddTask);
add.onclick = function(){
    if(icon.classList.contains('fa-plus')){
        icon.classList.replace('fa-plus','fa-minus');
    }
    else{
        icon.classList.replace('fa-minus','fa-plus');
    }

    if (AddTask.style.height==0)
    {
        AddTask.style.height=AddTask.scrollHeight+'px';
    }
    else{
        AddTask.style.height=null;
    }
}
let AddButton=document.querySelector('.Add #btn');
let DoneButton=document.querySelector('.Add #btn2');
let input=document.querySelectorAll('input');
let TaskList=document.querySelector('.TaskList');
let h4=document.querySelector('.error h4');
let error=document.querySelector('.error');
let NoTask=document.querySelector('.NoTask');


AddButton.onclick=function(){
    if (input[0].value.length==0) {
        h4.textContent='Please Enter Your Name';
        error.style.height=error.scrollHeight+'px';
    }    
    else if (input[1].value.length==0) {
        h4.textContent='Please Enter Image URL ';
        error.style.height=error.scrollHeight+'px';

    }    
    else if (input[2].value.length==0) {
        h4.textContent='Please Enter The Date';
        error.style.height=error.scrollHeight+'px';
    }    
    else{

   let MainDiv=document.createElement('div');
   let div1=document.createElement('div');
   let div2=document.createElement('div');
   let p1=document.createElement('p');
   let img=document.createElement('img');
   let p2=document.createElement('p');
   let Delete=document.createElement('i');
   Delete.className="fa-solid fa-circle-xmark";
   div1.appendChild(img);
   img.src=input[1].value;
   div1.appendChild(p1);
   p1.textContent=input[0].value;
   div2.appendChild(p2);
   p2.textContent=input[2].value;
   div2.appendChild(Delete);
   div1.className='div1';
   div2.className='div2';
   MainDiv.className='MainDiv';
   MainDiv.classList.add('border')
   MainDiv.appendChild(div1);
   MainDiv.appendChild(div2);
   TaskList.appendChild(MainDiv);
    Delete.onclick=function(){
    MainDiv.remove();
}
TaskList.style.height-=TaskList.scrollHeight+'px';
 NoTask.style.height=0;
   NoTask.style.overflow='hidden';
    error.style.height=null; 
    }
}

DoneButton.onclick=function(){
    error.style.height=null; 
    if (AddTask.style.height==0)
    {
        AddTask.style.height=AddTask.scrollHeight+'px';
    }
    else{
        AddTask.style.height=null;
    }
}
let Mood=document.querySelector('.container .row .fa-moon');


Mood.onclick=function(){
    document.body.classList.toggle('darkTheme');
}

let spanner=document.querySelector('.spanner');
window.onload=function(){
spanner.classList.add('hide');
spanner.remove();
} 
let bigImg=document.querySelector('.bigImages img');
let p=document.querySelector('.bigImages p');
let Img=document.querySelectorAll('.images img');

for (let i = 0; i < Img.length; i++) {
    Img[i].onclick=function(){
        let OldSrc=bigImg.src;
        bigImg.src=Img[i].src;
        Img[i].src=OldSrc ;
        let OldTitle=bigImg.title;
        bigImg.title=Img[i].title;
        Img[i].title=OldTitle ;        
    }
} 