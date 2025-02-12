//document.body.onload = makeName;
function makeName() {

}

function sendMsg(event) {
    event.preventDefault();
    
    // create a new div element
    const msgDiv = document.createElement("div");
    
    // get the message text
    let msgText = document.getElementById("sendBox").value;
    
    // create a text node with the message
    const msgContent = document.createTextNode(msgText);
    
    // add the text node to the newly created div
    msgDiv.appendChild(msgContent);
    
    // add the newly created div to the chatBox
    document.getElementById("chatBox").appendChild(msgDiv);
    
    // clear the input field
    document.getElementById("sendBox").value = "";
    
    // scroll the chatBox to the bottom
    const chatBox = document.getElementById("chatBox");
    chatBox.scrollTop = chatBox.scrollHeight;
}
