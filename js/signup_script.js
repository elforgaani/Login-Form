
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signupButton = document.getElementById('signup-btn');
var users = [];
let user = {};
let isExisted;

signupButton.addEventListener('click', signUpUser)

function signUpUser() {
    user = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value
    }
    users = JSON.parse(localStorage.getItem('users'));
    if (users == null) {
        localStorage.setItem('users', JSON.stringify([user]));
    } else {
        users.forEach(user => {
            user.userEmail == userEmail.value ? isExisted = true : isExisted = false;
        });
        isExisted ? alert('User Existed') : addUser(users, user)
    }
}

function addUser(users, user) {
    if (validateEmail(user.userEmail)) {
        if (validatePassword(user.userPassword)) {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            alert(`User Created Successfully`)
            clear();
            window.location.replace('../index.html')
        } else {
            alert('Invalid Password');
        }
    } else {
        alert('Invalid Email')
    }

}

function validateEmail(email) {
    const emailValidateRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidateRegEx.test(email);
}
function validatePassword(password) {
    console.log(password.length)
    console.log(password.length > 8)
    return password.length >= 8;

}

function clear() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
}


