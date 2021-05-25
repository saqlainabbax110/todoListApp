var MainTodoContainer= document.getElementById('todos');
var input = document.querySelector('.todo-input');
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');

addingButton.addEventListener('click', function(e){
    if (input.value.trim()){
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');

        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        


        var liTag = document.createElement('li');
        liTag.innerHTML= input.value;
        liTag.classList.add('todo-item');
        
        var buttonDiv =document.createElement('div');
        buttonDiv.classList.add('button');


        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class= "fas fa-check"></i>';


        var editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML = '<i class= "far fa-edit"></i>';

        editBtn.onclick = function(){
            editWorking(liTag);
        }


        var trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class= "fas fa-trash"></i>';

        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);
        MainTodoContainer.appendChild(ulTag);
        // console.log(MainTodoContainer);
    
        todoList.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'completed'){
                var todo  = items.parentElement;
                var todo2 = items.parentElement;
                todoList.classList.add('line_through')
            }
            else if(items.classList[0] === 'trash'){
                var todo  = items.parentElement;
                var todo2 = items.parentElement;
                var todo3 = items.parentElement;
                todo2.classList.add('fall');
                todoList.addEventListener('transitionend', function (){
                    todoList.remove();
                })
                
            }
            
        })

        input.value= '';


        
    }
    else if(input.value=== ''){
        alert('Please Fill The Input Field')
    }
});

function editWorking(e){
    var editValue = prompt('Edit The Selected Item', e.firstChild.nodeValue)
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(i = 0; i< gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}



 