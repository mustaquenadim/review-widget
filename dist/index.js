function reviewWidget() {
    var container = document.createElement('div');
    container.classList.add('container');
    container.style.position = 'fixed';
    document.body.appendChild(container);
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    var chatIcon = document.createElement('img');
    chatIcon.src = '../assets/revews logo.png';
    chatIcon.classList.add('icon');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'https://img.icons8.com/color/50/000000/delete-sign.png';
    closeIcon.classList.add('icon', 'hidden');
    buttonContainer.appendChild(chatIcon);
    buttonContainer.appendChild(closeIcon);
    buttonContainer.addEventListener('click', toggleOpen);
    /**
     * messageContainer
     */
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('hidden', 'message-container');
    createMessageContainerContent();
    function createMessageContainerContent() {
        messageContainer.innerHTML = '';
        var title = document.createElement('h2');
        title.textContent = 'Reviews';
        var form = document.createElement('form');
        form.classList.add('content');
        var email = document.createElement('input');
        email.required = true;
        email.id = 'email';
        email.type = 'email';
        email.placeholder = 'Enter your email address';
        var message = document.createElement('textarea');
        message.required = true;
        message.id = 'message';
        message.placeholder = 'Your Message';
        var btn = document.createElement('button');
        btn.textContent = 'Submit';
        form.appendChild(email);
        form.appendChild(message);
        form.appendChild(btn);
        form.addEventListener('submit', sendMessage);
        messageContainer.appendChild(title);
        messageContainer.appendChild(form);
    }
    container.appendChild(messageContainer);
    container.appendChild(buttonContainer);
    var styleTag = document.createElement('style');
    styleTag.innerHTML = "\n  .container {\n    bottom: 30px;\n    right: 30px;\n  }\n  .icon {\n    cursor: pointer;\n    width: 70%;\n    position: absolute;\n    top: 9px;\n    left: 9px;\n    transition: transform .3s ease;\n}\n.hidden {\n    transform: scale(0);\n}\n.button-container {\n    background-color: #F9F9F9;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n}\n.message-container {\n    box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);\n    width: 400px;\n    right: -25px;\n    bottom: 75px;\n    max-height: 400px;\n    position: absolute;\n    transition: max-height .2s ease;\n    font-family: Helvetica, Arial ,sans-serif;\n}\n.message-container.hidden {\n    max-height: 0px;\n}\n.message-container h2 {\n    margin: 0;\n    padding: 20px 20px;\n    color: #fff;\n    background-color: #18A87C;\n}\n.message-container .content {\n    margin: 20px 10px ;\n    border: 1px solid #dbdbdb;\n    padding: 10px;\n    display: flex;\n    background-color: #fff;\n    flex-direction: column;\n}\n.message-container form * {\n    margin: 5px 0;\n}\n.message-container form input {\n    padding: 10px;\n}\n.message-container form textarea {\n    height: 100px;\n    padding: 10px;\n}\n.message-container form textarea::placeholder {\n    font-family: Helvetica, Arial ,sans-serif;\n}\n.message-container form button {\n    cursor: pointer;\n    background-color: #18A87C;\n    color: #fff;\n    border: 0;\n    border-radius: 4px;\n    padding: 10px;\n}\n.message-container form button:hover {\n    background-color: #16632f;\n}\n  ".replace(/^\s+|\n/gm, '');
    document.head.appendChild(styleTag);
    var open = false;
    function toggleOpen() {
        open = !open;
        if (open) {
            console.log('hello 5');
            chatIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            messageContainer.classList.remove('hidden');
        }
        else {
            console.log('hello');
            createMessageContainerContent();
            chatIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            messageContainer.classList.add('hidden');
        }
    }
    function sendMessage(event) {
        event.preventDefault();
        var formSubmission = {
            email: event.srcElement.querySelector('#email').value,
            message: event.srcElement.querySelector('#message').value,
        };
        messageContainer.innerHTML =
            '<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry';
        console.log(formSubmission);
    }
}
reviewWidget();
