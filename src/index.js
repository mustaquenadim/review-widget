function reviewWidget() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.style.position = 'fixed';

  document.body.appendChild(container);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const chatIcon = document.createElement('img');
  chatIcon.src = '../assets/revews logo.png';
  chatIcon.classList.add('icon');

  const closeIcon = document.createElement('img');
  closeIcon.src = 'https://img.icons8.com/color/50/000000/delete-sign.png';
  closeIcon.classList.add('icon', 'hidden');

  buttonContainer.appendChild(chatIcon);
  buttonContainer.appendChild(closeIcon);
  buttonContainer.addEventListener('click', toggleOpen);

  /**
   * messageContainer
   */
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('hidden', 'message-container');

  createMessageContainerContent();

  function createMessageContainerContent() {
    messageContainer.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Reviews';

    const form = document.createElement('form');
    form.classList.add('content');
    const email = document.createElement('input');
    email.required = true;
    email.id = 'email';
    email.type = 'email';
    email.placeholder = 'Enter your email address';

    const message = document.createElement('textarea');
    message.required = true;
    message.id = 'message';
    message.placeholder = 'Your Message';

    const btn = document.createElement('button');
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

  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
  .container {
    bottom: 30px;
    right: 30px;
  }
  .icon {
    cursor: pointer;
    width: 70%;
    position: absolute;
    top: 9px;
    left: 9px;
    transition: transform .3s ease;
}
.hidden {
    transform: scale(0);
}
.button-container {
    background-color: #F9F9F9;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.message-container {
    box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
    width: 400px;
    right: -25px;
    bottom: 75px;
    max-height: 400px;
    position: absolute;
    transition: max-height .2s ease;
    font-family: Helvetica, Arial ,sans-serif;
}
.message-container.hidden {
    max-height: 0px;
}
.message-container h2 {
    margin: 0;
    padding: 20px 20px;
    color: #fff;
    background-color: #18A87C;
}
.message-container .content {
    margin: 20px 10px ;
    border: 1px solid #dbdbdb;
    padding: 10px;
    display: flex;
    background-color: #fff;
    flex-direction: column;
}
.message-container form * {
    margin: 5px 0;
}
.message-container form input {
    padding: 10px;
}
.message-container form textarea {
    height: 100px;
    padding: 10px;
}
.message-container form textarea::placeholder {
    font-family: Helvetica, Arial ,sans-serif;
}
.message-container form button {
    cursor: pointer;
    background-color: #18A87C;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 10px;
}
.message-container form button:hover {
    background-color: #16632f;
}
  `.replace(/^\s+|\n/gm, '');
  document.head.appendChild(styleTag);

  let open = false;
  function toggleOpen() {
    open = !open;
    if (open) {
      console.log('hello 5');
      chatIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      messageContainer.classList.remove('hidden');
    } else {
      console.log('hello');
      createMessageContainerContent();
      chatIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      messageContainer.classList.add('hidden');
    }
  }

  function sendMessage(event) {
    event.preventDefault();
    const formSubmission = {
      email: event.srcElement.querySelector('#email').value,
      message: event.srcElement.querySelector('#message').value,
    };

    messageContainer.innerHTML =
      '<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry';

    console.log(formSubmission);
  }
}

reviewWidget();
