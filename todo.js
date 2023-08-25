const todo_input = document.getElementById("todo-input"); // input field
const todo_add_btn = document.getElementById("todo-add-btn"); //btn for submit
const todo_list_data_container = document.getElementById("todo-list-data-container"); // display area
const form = document.getElementById("form");

console.log(form);

form.addEventListener("submit",addTodo)
// form.addEventListener("submit",(e)=>e.preventDefault())



function addTodo (e){
    e.preventDefault();
    let todoText =  todo_input.value;
    console.log(todoText);

    // create an element
    let _div_ = document.createElement("div");

    // add class by div

    // _div_.classList.add("todo-list");
    
    let _p_ = document.createElement("p");
    _p_.innerHTML = todoText
    console.log(_div_,_p_);
    
    todo_list_data_container.appendChild(_div_.appendChild(_p_))
    




//     <!-- <div class="todo-list">
//     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, vel.</p>
//     <button>delete</button>
// </div> -->
    
}




// ----------------------------------------


function name() {
    console.log('name');
}

// argument,parameter,without

// name();

// -----------------------

// argument,parameter,with

function functionWithParams(params) {
    console.log('loggg',params);
}

// function calling
// functionWithParams(17) //argument

// console.log('dfdfd');


// ----------------------------------------------


