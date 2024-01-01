const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signupButton = document.getElementById('signup-btn');
var users = [];
let user = {};
let isExisted = false;

signupButton.addEventListener('click', signUpUser)

function signUpUser() {
    console.log("SignUpUser function is called");

    user = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPassword.value
    };
    console.log("User object:", user);

    users = JSON.parse(localStorage.getItem('users'));
    console.log("Existing users:", users);

    if (users == null) {
        console.log("No existing users, creating new array");
        addUser(users, user);
    } else {
        users.forEach(existingUser => {
            console.log("Checking user:", existingUser);
            if (existingUser.userEmail == userEmail.value) {
                isExisted = true;
                console.log("User already exists");
            }
        });
        isExisted ? alert('User Existed') : addUser(users, user);
    }
}

function addUser(users, user) {

    if (validateEmail(user.userEmail)) {
        if (validatePassword(user.userPassword)) {
            if (users == null) {
                localStorage.setItem('users', JSON.stringify([user]));
            } else {
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
            }

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
    console.log(emailValidateRegEx.test(email))
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
