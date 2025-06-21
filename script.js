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

// Floating chat icon logic
const chatIcon = document.getElementById('chat-icon');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');

chatIcon.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

closeChat.addEventListener('click', () => {
  chatBox.classList.add('hidden');
});

// (Optional) Contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    contactForm.reset();
  });
}