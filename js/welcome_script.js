const userInfo = document.getElementById('user-name');
const logoutBtn = document.getElementById('logout-btn');
userInfo.innerText = `Welcome ${localStorage.getItem('loggedInUser')}`

logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    window.location.replace('../index.html');
})