
function getUserFromLocalStorage() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}


function updateAccountLink() {
    const user = getUserFromLocalStorage();
    const accountLink = document.querySelector('.account-link');
    const accountFirstName = document.getElementById('firstName');

    if (user && accountLink) {
        accountLink.innerHTML = `<h2 class="user-name">${user.firstName}  ${user.lastName}</h2>`;
  
    }
}

function updatePlaceholder() {
    const user = getUserFromLocalStorage();
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const usernameInput = document.getElementById('userName');
    const emailInput = document.getElementById('email');

    if (user && user.firstName && firstNameInput) {
        firstNameInput.placeholder = `${user.firstName}`;
        lastNameInput.placeholder =  `${user.lastName}`;
        usernameInput.placeholder =  `${user.username}`;
        emailInput.placeholder =  `${user.email}`;
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateAccountLink();
    updatePlaceholder();
});
