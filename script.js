// Toggle chat box visibility
document.getElementById('chatToggle').addEventListener('click', function() {
    var chatBox = document.getElementById('chatBox');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
});

// Close chat box
document.getElementById('chatClose').addEventListener('click', function() {
    document.getElementById('chatBox').style.display = 'none';
});

// Send message
document.getElementById('sendMessage').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var chatInput = document.getElementById('chatInput');
    var message = chatInput.value.trim();
    if (message !== '') {
        var chatBody = document.querySelector('.chat-body');

        // User message
        var userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'chat-message-user');
        userMessage.innerHTML = `<div class="message-content"><p>${message}</p></div>`;
        chatBody.appendChild(userMessage);

        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;

        // Clear input
        chatInput.value = '';

        // Mock response from agent
        setTimeout(function() {
            var agentMessage = document.createElement('div');
            agentMessage.classList.add('chat-message', 'chat-message-agent');
            agentMessage.innerHTML = `<div class="message-content"><p>Thank you for your message. We'll get back to you shortly.</p></div>`;
            chatBody.appendChild(agentMessage);

            // Scroll to bottom
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}


// Scroll to top button
var scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
    // Show scroll to top button after scrolling down 500px
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function () {
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


