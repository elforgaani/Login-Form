const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signinButton = document.getElementById('signin-btn');


let users = []
let isExisted;
let loggedInUser = '';
let cachedUser = ''

signinButton.addEventListener('click', signInUser);

function signInUser() {
    users = JSON.parse(localStorage.getItem('users'));
    if (users == null) {
        alert('User Not Found')
    } else {
        isExisted = false;
        users.forEach(user => {
            if (user.userEmail === userEmail.value) {
                isExisted = true;
                cachedUser = user;
                loggedInUser = user.userName

            }
        });
    }
    if (isExisted) {
        if (checkAuth(cachedUser)) {
            localStorage.setItem('loggedInUser', loggedInUser);
            window.location.replace('../welcome.html');
        } else { alert('Wrong Password'); }
    } else {
        alert('User Not Found')
    }
}

function checkAuth(user) {
    return user.userPassword == userPassword.value
}

