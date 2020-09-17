import '../sass/style.scss';

let $todoInput;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
let $popup;
let $popupinfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $idNumber = 0;
let $allTasks;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}


const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo-content__input');
    $alertInfo = document.querySelector('.todo-list__info');
    $addBtn = document.querySelector('.todo-content__addControl');
    $ulList = document.querySelector('.todo-list Ul');
    $popup = document.querySelector('.todo-popup');
    $popupinfo = document.querySelector('.todo-popup__main-info');
    $popupInput = document.querySelector('.todo-popup__input');
    $addPopupBtn = document.querySelector('.todo-popup__control--accept');
    $closeTodoBtn = document.querySelector('.todo-popup__control-cancel');
    $allTasks = $ulList.getElementsByTagName('li');

}

const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
    $todoInput.addEventListener('keyup', enterChceck)
}

const enterChceck = () => {
    if (event.keyCode === 13) {
        addNewTask()
    }
}

const addNewTask = () => {
    if ($todoInput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $ulList.appendChild($newTask);
        $todoInput.value = ""
        $alertInfo.innerText = ""
        createToolsArea()
    } else {
        $alertInfo.innerText = "Enter the content of task!"
    }
}



const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('todo__tool');
    $newTask.appendChild(toolsPanel)

    const todoDate = document.createElement('span');
    todoDate.classList.add('todo-element-bar');
    const date = new Date();

    function leadingZeroMounth(i) {
        return (i < 9) ? "0" + (i + 1) : i;
    }

    function leadingZeroMinutesHours(i) {
        return (i < 10) ? "0" + i : i;
    }

    const dateText = date.getDate() + '-' + leadingZeroMounth(date.getMonth()) + '-' + date.getFullYear() + ' godz.: '
        + leadingZeroMinutesHours(date.getHours()) + ':' + leadingZeroMinutesHours(date.getMinutes());
    todoDate.innerText = dateText;
    toolsPanel.appendChild(todoDate);


    const completeBtn = document.createElement('button');
    completeBtn.classList.add('todo__complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    toolsPanel.appendChild(completeBtn)

    const editBtn = document.createElement('button');
    editBtn.classList.add('todo__edit');
    editBtn.innerText = 'EDIT';
    toolsPanel.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo__delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.appendChild(deleteBtn);


}

const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('todo__complete')) {
        e.target.closest('li').classList.toggle('todo__completed');
        e.target.closest('button').classList.toggle('todo__completed');
    } else if (e.target.closest('button').classList.contains('todo__edit')) {
        editTask(e);
    } else if (e.target.closest('button').classList.contains('todo__delete')) {
        deleteTask(e);
    }
}

const editTask = (e) => {
    const oldTodo = e.target.closest('li').id
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex';
}

const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value
        $popup.style.display = 'none';
        $popupinfo.innerText = ""
    } else {
        $popupinfo.innerText = 'You need to write content!'
    }
}

const closePopup = () => {
    $popup.style.display = 'none';
    $popupinfo.innerText = ""
}

const deleteTask = (e) => {
    const deleteTodo = e.target.closest('li')
    deleteTodo.remove();
    console.log()
    if ($allTasks.length == 0) {
        $alertInfo.innerText = 'There are no tasks in the list.';

    }

}

document.addEventListener('DOMContentLoaded', main)
