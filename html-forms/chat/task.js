const messages = [
    'ШО нада?',
    'Оставьте у нас ваши деньги и уходите',
    'Ты бы еще  консервных банок насобирал',
    'К сожалению, все операторы сейчас отдыхают. Мы вам не перезвоним',
    'У нас круглосуточный перерыв на обед',
    'Здравствуйте и до свидания'
  ];
  
  const redBadge = document.querySelector('.chat-widget__side');
  const chatWindow = document.querySelector('.chat-widget');
  const chatMessages = document.getElementById('chat-widget__messages');
  const inputMessage = document.getElementById('chat-widget__input');
  
  const initTimer = 30;
  let timeoutId;
  
  const timer = {
    counter: initTimer,
    start: function() {
      this.counter = initTimer;
      timeoutId = setTimeout(() => this.repeat(), 1000);
    },
    repeat: function() {
      this.counter--;
      if (this.counter <= 0) {
        robotReply();
        this.start();
      } else {
        timeoutId = setTimeout(() => this.repeat(), 1000);
      }
    },
    stop: function() {
      clearTimeout(timeoutId);
    }
  };
  
  const robotReply = () => {
    const index = Math.floor(Math.random() * messages.length);
    chatMessages.innerHTML += `<div class="message"><div class="message__time">${new Date().toLocaleTimeString().substr(0, 5)}</div><div class="message__text">${messages[index]}</div></div>`;
    const lastMessage = chatMessages.lastElementChild;
    if (lastMessage) {
      lastMessage.scrollIntoView(false);
    }
  };
  
  redBadge.addEventListener('click', () => {
    chatWindow.classList.add('chat-widget_active');
    timer.start();
  });
  
  inputMessage.addEventListener('keydown', function(e) {
    if (e.code !== 'Enter') return;
  
    const messageText = this.value.trim();
    if (messageText === '') return;
  
    chatMessages.innerHTML += `<div class="message message_client"><div class="message__time">${new Date().toLocaleTimeString().substr(0, 5)}</div><div class="message__text">${messageText}</div></div>`;
    this.value = '';
  
    robotReply();
    timer.stop();
    timer.start();
  });
  