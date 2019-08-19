 const chatList = document.querySelector('.chat-list');
 const newChatForm = document.querySelector('.new-chat');
 const newNameForm = document.querySelector('.new-name');
 const updateMsg = document.querySelector('.update-message');
 const rooms = document.querySelector('.chat-rooms');
// adding new message
newChatForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(()=> newChatForm.reset())
    .catch(err=> console.log(err))
});

// update username
newNameForm.addEventListener('submit', e=>{
    e.preventDefault();
    const updateName = newNameForm.name.value.trim();
    chatroom.updateUsername(updateName);
    newNameForm.reset();
    //update msg
    updateMsg.innerText = `Your username is updated to ${updateName}`;
    setTimeout(()=> updateMsg.innerText='',3000)
});

//update chat room
rooms.addEventListener('click', e=>{
if(e.target.tagName==='BUTTON'){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat=> chatUI.render(chat));
}

});

// check local storage
const username = localStorage.username ? localStorage.username : 'Anonymous';



 const chatUI = new ChatUI(chatList);
 const chatroom = new Chatroom('general', username);

 chatroom.getChats(data => chatUI.render(data)); 