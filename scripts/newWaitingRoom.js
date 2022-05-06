// Obtener todos los usuarios
// [ Por claridad, dejamos esta función acá. Esta es la misma función
// vista en la cápsula de API en el GET de usuarios, la cual podríamos reutilizar ]
const usersContent = document.getElementById('users-content');
const templateUser = document.getElementById('template-user').content;
const waitingContent = document.getElementById('waiting-content');
const templateWaiting = document.getElementById('template-waiting').content;

const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    getUsers();
    makeEmptySpaces();
});

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    const userContainer = event.target;
    event.dataTransfer.setData("text", userContainer.dataset.info);
}

  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");

    addToRoom(event.target.parentElement, data);
}

const getUsers = async () => {
    try {
        const res = await fetch("http://localhost:3000/users", {method: "GET"});
        const users = await res.json();
        allUsers = users;
        
        users.forEach(user => {
            const clone = templateUser.cloneNode(true);
            const cloneUserCard = clone.querySelector('.user-card');

            cloneUserCard.addEventListener('dragstart', drag);
            cloneUserCard.dataset.info = JSON.stringify(user, undefined, 0);

            clone.querySelector('h4').textContent = user.username;



            fragment.appendChild(clone);
        })
        usersContent.appendChild(fragment);

    } catch(error) {
        console.log(error);
    }
}

const makeEmptySpaces = () => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 4; i++) {
        const clone = templateWaiting.cloneNode(true);
        fragment.appendChild(clone);
    }
    waitingContent.appendChild(fragment);
}

const addToRoom = (element, data) => {
    const user_data = JSON.parse(data);
    element.querySelector('h4').textContent = user_data.username;
    element.querySelector('img').src = "../assets/carrot.jpeg";
    element.querySelector('button').disabled = false;
}

const removeFromRoom = (event) => {
    const element = event.target.parentElement;
    element.querySelector('button').disabled = true;
    element.querySelector('h4').textContent = templateWaiting.querySelector('h4').textContent;
    element.querySelector('img').src = templateWaiting.querySelector('img').src;

}