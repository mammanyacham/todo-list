

function showPopup()
 {
    document.querySelector('.js-popup').style.display = "block";

    const randomNumber = (Math.random() * 3);
    if (randomNumber < 1) {
        document.querySelector('.js-popup-message').innerHTML = `You have completed five of your todos! 🎯
     🔥 Fire!! 🔥
        `
    } else if (randomNumber < 2) {
          document.querySelector('.js-popup-message').innerHTML =  `You have completed five of your todos! 🎯
            Great job!
        `
    } else {
          document.querySelector('.js-popup-message').innerHTML =  `You have completed five of your todos! 🎯
         consistency is key!
        `
    }
 };

 function hidePopup() {
    document.querySelector('.js-popup').style.display = "none";
 };


document.querySelector('.js-add-todo-button').addEventListener('click', () => {
   renderTodoList();
});

 let removedCount = 0;
           
function renderTodoList() {
     let todo = document.querySelector('.js-input-field').value;   
     if (todo === '') {
        return;
     }
    const html = `
    <div class="todo-item js-todo-item">
    <p class="display-todo js-display-todo">${todo}</p>
    <button class="clear-button js-clear-button">DONE</button>
    </div>
    `;
    const displayTodo = document.querySelector('.js-display-div').innerHTML += html;
    document.querySelector('.js-input-field').value = '';

    document.querySelectorAll('.js-clear-button').forEach((clearButton) => {
        clearButton.addEventListener('click', function (){
            this.parentElement.remove()
            removedCount++
            if(removedCount === 5){
                showPopup();
                removedCount = 0;
            };
            document.querySelector('.js-popup-button').addEventListener('click', () => {
                hidePopup();
            })
            
        })
    });

    };




