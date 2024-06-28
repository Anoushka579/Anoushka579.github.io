document.addEventListener('DOMContentLoaded', function () {
    // Global variables
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');

    // Event listener for user input
    userInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send user message and receive bot response
    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            appendMessage('user', message);
            userInput.value = '';

            // Simulate AI response (replace with actual AI logic)
            setTimeout(() => {
                const reply = generateBotResponse(message);
                appendMessage('bot', reply);
            }, 500);
        }
    }

    // Function to append message to chat box
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);

        // Scroll chat to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Function to generate bot response based on user message
    function generateBotResponse(message) {
        // Lowercase message for case-insensitive comparison
        const lowerMessage = message.toLowerCase();

        // Responses based on keywords or patterns
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! Welcome to the KED LitFest chatbot. How may I help you?";
        } else if (lowerMessage.includes('timings') || lowerMessage.includes('schedule')) {
            return "The event timings are from 9 am to 5 pm. The detailed event schedule can be found on the Events page, as well as, the Home Page.";
        } else if (lowerMessage.includes('events') || lowerMessage.includes('suitable events')) {
            return "Based on your interests, I recommend attending any of our interactive sessions, as well as, LitFest After Hours. Check our schedule for more details.";
        } else if (lowerMessage.includes('registration') || lowerMessage.includes('register')) {
            return "Registration is required for this event. Please visit our official website to register and secure your spot, through the Registration Tag in the Navigation Bar.";
        } else if (lowerMessage.includes('location') || lowerMessage.includes('venue')) {
            return "The festival is held at the Kunskapsskolan Gurgaon campus, which can be found at: Site No. 1122, Block A, DLF Phase-I,Haryana, Gurugram 122002.";
        } else if (lowerMessage.includes('speakers') || lowerMessage.includes('authors')) {
            return "We have a lineup of renowned authors and speakers, including writer and storyteller Sudha Murty and best-selling author J.K. Rowling. Check the schedule for their session timings.";
        } else if (lowerMessage.includes('tickets') || lowerMessage.includes('entry fee')) {
            return "Entry to the event requires registration which can be done beforehand through our website, and any last minute changes can be made the same day at the front gate during Entry. Check our Registration Page for ticket details.";
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('help')) {
            return "For further assistance, please contact our support team at info@kedlitfest.com or call us at +123456789.";
        } else if (lowerMessage.includes('parking')) {
            return "Parking is available on-site at the nearby DT Mega Mall. Follow the signs upon arrival.";
        } else if (lowerMessage.includes('food') || lowerMessage.includes('restaurants')) {
            return "We have food stalls and restaurants inside the convention center offering a variety of cuisines.";
        } else if (lowerMessage.includes('accommodation') || lowerMessage.includes('hotels')) {
            return "We recommend nearby hotels such as The Bristol Hotel and The Lodgers. Visit our website for more accommodation options.";
        } else if (lowerMessage.includes('age limit') || lowerMessage.includes('children')) {
            return "The festival is suitable for all ages, and we have specific events geared towards children and young adults. Check our schedule for family-friendly activities.";
        } else if (lowerMessage.includes('dress code')) {
            return "There is no specific dress code for the festival. Dress comfortably and according to your preference. A costume competition for children up till the age of 18 will also be held between events, based on your favorite literary characters!";
        } else if (lowerMessage.includes('volunteer') || lowerMessage.includes('volunteering')) {
            return "We appreciate your interest in volunteering! Please contact our volunteer coordinator at volunteers@kedlitfest.com for more information.";
        } else {
            return "I'm sorry, I don't understand. Please ask another question or visit our website for more information.";
        }
    }
});
