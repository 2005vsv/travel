import { useState } from "react";

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([
        { text: "Hello! How can I assist you today?", isUser: false },
    ]);
    const API_KEY = "AIzaSyDr15Lq5osisF5pyk96-aUbKvdZ05t5YQg"; // Replace with your actual API key
    const HOTELS_API_URL = "http://localhost:5000/api/hotels"; // Your local hotels API

    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            // Add user's message to the conversation
            setConversation((prev) => [...prev, { text: message, isUser: true }]);
            
            // Check if the user asks for trip plan suggestions
            if (message.toLowerCase().includes("trip plan") || message.toLowerCase().includes("suggest a trip")) {
                try {
                    const response = await fetch(HOTELS_API_URL);
                    const data = await response.json();

                    if (data && data.length > 0) {
                        const tripSuggestion = {
                            role: "bot",
                            text: "Here are some suggested trip plans based on your preferences: ",
                        };

                        setConversation((prev) => [
                            ...prev,
                            tripSuggestion,
                            ...data.map((hotel) => ({
                                role: "bot",
                                text: `Visit ${hotel.name} in ${hotel.city} for a great experience!`,
                            })),
                        ]);
                    } else {
                        setConversation((prev) => [
                            ...prev,
                            { role: "bot", text: "Sorry, I couldn't find any trip plans at the moment." },
                        ]);
                    }
                } catch (error) {
                    console.error("Error fetching hotels:", error);
                    setConversation((prev) => [
                        ...prev,
                        { role: "bot", text: "Something went wrong while fetching trip plans." },
                    ]);
                }
            } else {
                // Default API interaction for other queries
                try {
                    const response = await fetch(
                        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                contents: [
                                    {
                                        role: "user",
                                        parts: [{ text: message }],
                                    },
                                ],
                            }),
                        }
                    );
                    const data = await response.json();
                    console.log("Gemini API Response:", data);

                    // Check if the response has valid content
                    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
                        const botReply = {
                            role: "bot",
                            text: data.candidates[0].content.parts[0].text,
                        };
                        setConversation((prev) => [...prev, botReply]);
                    } else {
                        setConversation((prev) => [
                            ...prev,
                            { role: "bot", text: "Sorry, I couldn't understand that." },
                        ]);
                    }
                } catch (error) {
                    console.error("Error calling Gemini API:", error);
                    setConversation((prev) => [
                        ...prev,
                        { role: "bot", text: "Something went wrong while contacting the bot." },
                    ]);
                }
            }

            setMessage(""); // Clear input after sending
        }
    };

    return (
        <>
            {/* Floating Chatbot Button */}
            <button
                onClick={toggleChat}
                aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
                className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center focus:outline-none transition duration-300"
            >
                {/* Chat Icon */}
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-3.582 8-8 8-1.657 0-3.217-.512-4.514-1.385L3 21l1.385-4.514C4.512 15.217 4 13.657 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                        />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-6 z-50 w-80 max-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 flex flex-col">
                    <header className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-t-lg">
                        Chat Support
                    </header>
                    <div
                        className="p-4 flex-grow overflow-y-auto text-gray-900 dark:text-gray-100"
                        style={{ maxHeight: "300px" }}
                    >
                        {conversation.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                                <span
                                    className={`inline-block py-2 px-4 rounded-lg ${
                                        msg.isUser
                                            ? 'bg-blue-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200'
                                            : 'bg-blue-500 dark:bg-blue-600 text-white'
                                    }`}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <footer className="px-4 py-2 border-t border-gray-300 dark:border-gray-700">
                        <form onSubmit={handleSubmit} className="flex">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                value={message}
                                onChange={handleInputChange}
                            />
                            <button
                                type="submit"
                                className="ml-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
                            >
                                Send
                            </button>
                        </form>
                    </footer>
                </div>
            )}
        </>
    );
};
