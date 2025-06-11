
const messages = [
  { username: 'TwitchUser123', platform: 'Twitch', text: 'Salve, salve chat!' },
  { username: 'YT_Gamer', platform: 'YouTube', text: 'Bom dia galera!' },
  { username: 'TwitchMod', platform: 'Twitch', text: 'Lembrem de seguir o canal!' }
];

function getPlatformIcon(platform) {
  if (platform === 'Twitch') {
    return '<img src="https://imgur.com/sncEWQk" alt="Twitch" class="platform-icon">';
  } else if (platform === 'YouTube') {
    return '<img src="https://imgur.com/Kn21DSD" alt="YouTube" class="platform-icon">';
  }
  return '';
}

function addMessage({ username, platform, text }) {
  const container = document.getElementById('chat');
  const msg = document.createElement('div');
  msg.classList.add('message-row');

  const platformIcon = getPlatformIcon(platform);

  msg.innerHTML = `
    <div class="username">${platformIcon} ${username}:</div>
    <div class="user-message">${text}</div>
  `;

  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

// Simular chegada das mensagens
let index = 0;
setInterval(() => {
  if (index < messages.length) {
    addMessage(messages[index]);
    index++;
  }
}, 2000);
