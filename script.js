// Shopping basket count
let basketCount = 0;
const basketCountElem = document.getElementById('basket-count');
document.querySelectorAll('.add-basket-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    basketCount++;
    basketCountElem.textContent = basketCount;
    btn.textContent = "Added!";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "Add to Basket";
      btn.disabled = false;
    }, 1500);
  });
});

// Voicebot integration
const VOICEBOT_URL = 'https://lorent-watchmaker-v1.vercel.app/?config_id=0359ded1-a9cd-4330-8709-3a0fd9c53419';

// Floating chat icon logic with voicebot integration
const chatIcon = document.getElementById('chat-icon');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');
const startVoiceChat = document.getElementById('start-voice-chat');

chatIcon.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

closeChat.addEventListener('click', () => {
  chatBox.classList.add('hidden');
});

// Handle voice chat button click
if (startVoiceChat) {
  startVoiceChat.addEventListener('click', () => {
    // Option 1: Open in new window/tab
    const voiceChatWindow = window.open(
      VOICEBOT_URL, 
      'LorentVoiceBot', 
      'width=900,height=700,scrollbars=yes,resizable=yes,status=yes,menubar=no,toolbar=no'
    );
    
    // Optional: Focus the new window
    if (voiceChatWindow) {
      voiceChatWindow.focus();
      // Close the chat box since user is now using the voicebot
      chatBox.classList.add('hidden');
    } else {
      alert('Please allow popups to use the voice chat feature.');
    }
  });
}

// (Optional) Contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    contactForm.reset();
  });
}
