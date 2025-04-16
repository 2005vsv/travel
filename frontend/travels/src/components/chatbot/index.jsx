import { useState, useEffect } from "react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    { text: "Hi! Ask about hotel rating, discount, mood, city, price, or guest capacity.", isUser: false },
  ]);
  const [hotels, setHotels] = useState([]);

  const toggleChat = () => setIsOpen(prev => !prev);
  const handleInputChange = (e) => setMessage(e.target.value);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/hotels");
        const data = await res.json();
        setHotels(data);
      } catch (err) {
        console.error("Error fetching hotels:", err);
      }
    };
    fetchHotels();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const lowerMsg = message.toLowerCase();
    setConversation(prev => [...prev, { text: message, isUser: true }]);

    let filtered = [];

    if (lowerMsg.includes("rating")) {
      const match = lowerMsg.match(/(\d(\.\d)?)/);
      const minRating = match ? parseFloat(match[0]) : 4;
      filtered = hotels.filter(h => h.rating >= minRating);
      respondWithFiltered(filtered, `Hotels with rating ${minRating}+`);

    } else if (lowerMsg.includes("discount")) {
      const match = lowerMsg.match(/(\d+)%?/);
      const minDiscount = match ? parseInt(match[0]) : 20;
      filtered = hotels.filter(h => parseInt(h.discount) >= minDiscount);
      respondWithFiltered(filtered, `Hotels with ${minDiscount}%+ discount`);

    } else if (lowerMsg.includes("mood")) {
      const mood = lowerMsg.split("mood").pop().trim();
      filtered = hotels.filter(h => h.mood.toLowerCase().includes(mood));
      respondWithFiltered(filtered, `Hotels with mood like "${mood}"`);

    } else if (lowerMsg.includes("city") || lowerMsg.includes("in")) {
      const cityMatch = lowerMsg.match(/in\s+(\w+)/);
      const city = cityMatch ? cityMatch[1] : "";
      filtered = hotels.filter(h => h.city.toLowerCase().includes(city));
      respondWithFiltered(filtered, `Hotels in ${city}`);

    } else if (lowerMsg.includes("capacity") || lowerMsg.includes("guest")) {
      const match = lowerMsg.match(/(\d+)\s*(people|guests|persons)?/);
      const capacity = match ? parseInt(match[1]) : 2;
      filtered = hotels.filter(h => h.guestCapacity >= capacity);
      respondWithFiltered(filtered, `Hotels for at least ${capacity} guests`);

    } else if (lowerMsg.includes("price")) {
      const match = lowerMsg.match(/under\s*\$?(\d+)/) || lowerMsg.match(/\$?(\d+)/);
      const priceLimit = match ? parseInt(match[1]) : 1000;
      filtered = hotels.filter(h => h.price <= priceLimit);
      respondWithFiltered(filtered, `Hotels under $${priceLimit}`);

    } else if (lowerMsg.includes("description")) {
      const keyword = lowerMsg.split("description").pop().trim();
      filtered = hotels.filter(h => h.description?.toLowerCase().includes(keyword));
      respondWithFiltered(filtered, `Hotels with description matching "${keyword}"`);

    } else if (lowerMsg.includes("all hotels") || lowerMsg.includes("show hotels")) {
      respondWithFiltered(hotels, "Here are all available hotels");

    } else {
      setConversation(prev => [
        ...prev,
        { text: "❌ I can only help with hotel filters like rating, discount, mood, city, price, etc.", isUser: false },
      ]);
    }

    setMessage("");
  };

  const respondWithFiltered = (filtered, title) => {
    if (!filtered.length) {
      setConversation(prev => [...prev, { text: "No hotels found for your query.", isUser: false }]);
      return;
    }

    setConversation(prev => [
      ...prev,
      { text: title, isUser: false },
      ...filtered.slice(0, 5).map(h => ({
        text: `🏨 ${h.name} (${h.city}) - Rating: ${h.rating}, Discount: ${h.discount}, $${h.price}`,
        isUser: false,
      })),
    ]);
  };

  return (
    <>
      <button onClick={toggleChat} className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg">
        {isOpen ? "✖" : "💬"}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 flex flex-col z-50">
          <header className="px-4 py-2 bg-blue-600 text-white font-bold rounded-t-lg">Hotel Assistant</header>
          <div className="p-4 flex-grow overflow-y-auto text-sm" style={{ maxHeight: "300px" }}>
            {conversation.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block py-2 px-4 rounded-lg ${
                  msg.isUser
                    ? 'bg-blue-100 dark:bg-gray-600 text-gray-800'
                    : 'bg-blue-500 dark:bg-blue-600 text-white'
                }`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex p-2 border-t dark:border-gray-700">
            <input
              type="text"
              className="w-full px-2 py-1 rounded border dark:bg-gray-700 dark:text-white"
              placeholder="Ask about hotels..."
              value={message}
              onChange={handleInputChange}
            />
            <button type="submit" className="ml-2 px-3 bg-blue-600 text-white rounded">Send</button>
          </form>
        </div>
      )}
    </>
  );
};
