/*
Author: Anas Nasrallah.
Purpose: Random User Page Generator.
Date: 27.04.20
*/

/* This file is the mian file of the program. It handles the event 
listeners and control the other files. */

const APImanager = new APIManager;
const renderer = new Renderer;
localStorage.clear();
localStorage.setItem('users', '[]');

$('#load').on('click', function () {
    APImanager.loadData();
})

$('#display').on('click', function () {
    renderer.render(APImanager.data);
})

$('#save').on('click', function () {
    users = JSON.parse(localStorage.users);
    const data = APImanager.data;
    userFullName = data.mainUser.firstName + " " + data.mainUser.lastName;
    if (!users.find(user => user.user === userFullName)) {
        const savedUser = {
            user: userFullName,
            data: data
        };
        users.push(savedUser);
        localStorage.users = JSON.stringify(users);
        renderer.render(data);
    }
})

$('#loadSaved').on('click', function () {
    renderer.render(JSON.parse(localStorage.user));
})

$('.saved-users').on('click', '.saved-user', function () {
    users = JSON.parse(localStorage.users);
    const targetUser = users.find(user => user.user === $(this).text());
    renderer.render(targetUser.data);
})