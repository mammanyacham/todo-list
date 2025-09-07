

function showPopup()
 {
    document.querySelector('.js-popup').style.display = "block";

    const randomNumber = (Math.random() * 3);
    if (randomNumber < 1) {
        document.querySelector('.js-popup-message').innerHTML = `You have completed five of your todos! 🎯
     🔥 FLameo! Hotman 🔥
        `
    } else if (randomNumber < 2) {
          document.querySelector('.js-popup-message').innerHTML =  `You have completed five of your todos! 🎯
        Even the cabbage man would be proud! 🥬
        `
    } else {
          document.querySelector('.js-popup-message').innerHTML =  `You have completed five of your todos! 🎯
        You’re as sharp as Sokka’s boomerang! 🪃
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
    <button class="clear-button js-clear-button"></button>
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

    //this makes the clear-buttons background change when you hover on them
    document.querySelectorAll('.js-clear-button').forEach((clearButton) => {
        clearButton.addEventListener('mouseover',
            function() {
                const randomNumber = (Math.random() * 3);
                if(randomNumber < 0.5){
                     clearButton.style.backgroundImage = "url('images for ATLAproject/clear-button 3.jpg')";
                } else if (randomNumber < 1) {
                clearButton.style.backgroundImage = "url('images for ATLAproject/logo 1.jpg')";
                } else if (randomNumber < 2) {
                     clearButton.style.backgroundImage = "url('images for ATLAproject/clear-button 1.jpg')";
                } else{
                     clearButton.style.backgroundImage = "url('images for ATLAproject/clear-button 2.jpg')";
                }
                 clearButton.style.backgroundSize = "contain";
                console.log(randomNumber)
            });

            clearButton.addEventListener('mouseout', function () {
                clearButton.style.backgroundImage = "none";
            });
    });

   
};




