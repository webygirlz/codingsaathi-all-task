console.log("hello");

document.getElementById('btn').addEventListener('click', 
function(){

    let input = document.getElementById('input').value;

    let todo = document.createElement('li');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    todo.innerText=input;
    btn1.innerText = "Complete";
    btn2.innerText = "Delete";


    let ul=document.querySelector('ul');
    ul.appendChild(todo);
    todo.appendChild(btn1);
    todo.appendChild(btn2);
    btn1.style.color ="blue"
    btn2.style.color ="red"
    btn1.style.margin="3%"
    btn1.style.borderRadius="9px"
    btn1.style.border ="none"
    btn1.style.margin="3%"
    btn1.style.borderRadius="9px"
    btn2.style.border ="none"
    btn2.style.margin="3%"
    btn2.style.borderRadius="9px"



    btn1.addEventListener('click',
    function(){
     todo.style.textDecoration ="line-through";
    }
    );

    btn2.addEventListener('click',
    function(){
    todo.remove()
    }
    );

    document.getElementById('input').value="";


}
);