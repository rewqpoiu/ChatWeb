//document.body.onload = makeName;
function makeName() {

}

function sendMsg(event) {
    event.preventDefault();
    // create a new div element
    const msgDiv = document.createElement("p");
    let msgText = document.getElementById("sendBox").value;
    // and give it some content
    const msgContent = document.createTextNode(msgText);
    // add the text node to the newly created div
    msgDiv.appendChild(msgContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("here");
    document.body.insertBefore(msgDiv, currentDiv);
    document.getElementById("sendBox").value = "";
}