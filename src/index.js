import './styles/index.scss'

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
let $todoTemplete;
let $allTasks;
let $deleteAllControl;
let $addDate;
let $popupDate;


const main = () =>
{
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () =>
{
    $todoInput = document.querySelector( '.todo-content__input' );
    $alertInfo = document.querySelector( '.todo-list__info' );
    $addBtn = document.querySelector( '.todo-content__addControl' );
    $ulList = document.querySelector( '.todo-list Ul' );
    $popup = document.querySelector( '.todo-popup' );
    $popupinfo = document.querySelector( '.todo-popup__main-info' );
    $popupInput = document.querySelector( '.todo-popup__taskInput' );
    $addPopupBtn = document.querySelector( '.todo-popup__control--accept' );
    $closeTodoBtn = document.querySelector( '.todo-popup__control--cancel' );
    $todoTemplete = document.querySelector( '.todo' );
    $allTasks = $ulList.getElementsByTagName( 'li' );
    $deleteAllControl = document.querySelector( '.todo-content__deleteAllControl' );
    $addDate = document.querySelector( '.todo-content__addDate' );
    $popupDate = document.querySelector( '.todo-popup__dateInput' );
}

const prepareDOMEvents = () =>
{
    $addBtn.addEventListener( 'click', addNewTask );
    $ulList.addEventListener( 'click', checkClick );
    $closeTodoBtn.addEventListener( 'click', closePopup );
    $addPopupBtn.addEventListener( 'click', changeTodo );
    $todoInput.addEventListener( 'keyup', enterChceck );
    $deleteAllControl.addEventListener( 'click', deleteAllTask );
}

const enterChceck = () =>
{
    if ( event.keyCode === 13 )
    {
        addNewTask();
    }
}

const addNewTask = () =>
{
    $alertInfo.style.color = 'red';
    if ( $todoInput.value.length > 350 )
    {
        $alertInfo.innerText = "Too many characters, please limited to 350";
    } else if ( $todoInput.value === '' )
    {
        $alertInfo.innerText = "Please enter the content of task!";
    } else if ( $addDate.value == '' )
    {
        $alertInfo.innerText = "Please enter the content of data";
    } else
    {
        $idNumber++;
        $newTask = document.createElement( 'li' );
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute( 'id', `todo-${ $idNumber }` );
        $ulList.appendChild( $newTask );
        $todoInput.value = "";
        $alertInfo.innerText = "";
        createToolsArea();
        $addDate.value = "";
    }
}


const createToolsArea = () =>
{
    const toolsPanel = document.createElement( 'div' );
    toolsPanel.classList.add( 'todo-list__tools' );
    $newTask.appendChild( toolsPanel )

    const toDoDate = document.createElement( 'span' );
    toDoDate.classList.add( 'todo__date' )
    toDoDate.innerText = $addDate.value
    toolsPanel.appendChild( toDoDate );

    const completeBtn = document.createElement( 'button' );
    completeBtn.classList.add( 'todo__complete' );
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    toolsPanel.appendChild( completeBtn )

    const editBtn = document.createElement( 'button' );
    editBtn.classList.add( 'todo__edit' );
    editBtn.innerText = 'EDIT';
    toolsPanel.appendChild( editBtn );

    const deleteBtn = document.createElement( 'button' );
    deleteBtn.classList.add( 'todo__delete' );
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.appendChild( deleteBtn );
}

const checkClick = ( e ) =>
{
    if ( e.target.closest( 'button' ).classList.contains( 'todo__complete' ) )
    {
        e.target.closest( 'li' ).classList.toggle( 'todo__completed' );
        e.target.closest( 'button' ).classList.toggle( 'todo__completed' );
    } else if ( e.target.closest( 'button' ).classList.contains( 'todo__edit' ) )
    {
        editTask( e );
    } else if ( e.target.closest( 'button' ).classList.contains( 'todo__delete' ) )
    {
        deleteTask( e );
    }
}

const editTask = ( e ) =>
{
    const oldTodo = e.target.closest( 'li' ).id
    $editedTodo = document.getElementById( oldTodo );
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popupDate.value = $editedTodo.childNodes[ 1 ].childNodes[ 0 ].firstChild.textContent;
    $popup.style.display = 'flex';
    $todoTemplete.style.filter = "blur(5px)";
}

const changeTodo = () =>
{
    if ( $popupInput.value !== '' )
    {
        $editedTodo.firstChild.textContent = $popupInput.value
        $editedTodo.childNodes[ 1 ].childNodes[ 0 ].firstChild.textContent = $popupDate.value;
        $popup.style.display = 'none';
        $popupinfo.innerText = ""
        $todoTemplete.style.filter = "blur(0px)";
    } else
    {
        $popupinfo.innerText = 'You need to a write content!'
        $popupinfo.style.color = 'red'
        $popupinfo.style.fontWeight = 'bold'
    }
}

const closePopup = () =>
{
    $popup.style.display = 'none';
    $popupinfo.innerText = ""
    $todoTemplete.style.filter = "blur(0px)";
}

const deleteTask = ( e ) =>
{
    const deleteTodo = e.target.closest( 'li' )
    deleteTodo.remove();
    console.log()
    if ( $allTasks.length == 0 )
    {
        $alertInfo.innerText = 'There are no tasks in the list.';
    }
}

const deleteAllTask = () =>
{
    $ulList.innerHTML = ''
}

document.addEventListener( 'DOMContentLoaded', main )
