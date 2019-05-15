



function addTodo(e){
    e.preventDefault()
    
    let item = document.createElement('li')
    
    item.innerText = document.querySelector('#item').value

    let button = document.createElement('button') 
    button.innerText = 'x'
    button.addEventListener('click', removeTodo)
    item.append(button)

    item.addEventListener('click', completeTodo)
    document.querySelector('ul').appendChild(item)


}

document.querySelector('form').addEventListener('submit', addTodo)

function removeTodo (e){
    e.target.parentNode.remove()
    document.getElementById('completed-message').style.visibility = 'hidden'
}


function completeTodo(e){
    let val = e.target.getAttribute('aria-checked')
    e.target.setAttribute('aria-checked', !(val === 'true'))
    document.getElementById('completed-message').style.visibility = 'visible'
    setTimeout(function () {
        document.getElementById('completed-message').style.visibility = 'hidden';
    }, 1000);
}    

function suprise(e){

    let val = e.target.getAttribute('aria-checked')
    e.target.setAttribute('aria-checked', !(val === 'true'))


}
