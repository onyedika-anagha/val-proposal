import { useState } from "react";
import "./App.css";
import CardDeck from "./component/cards";

// Add swipe icon component
const SwipeIcon = () => (
  <svg
    className="w-6 h-6 animate-swipe-left"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const messages = [
  "Please say yes! 🥺",
  "Are you sure? Think again! 💭",
  "My heart will break! 💔",
  "Don't do this to me! 😢",
  "I'll be the happiest person! 🥰",
  "Pretty please! 🌹",
  "You're breaking my heart! 💝",
  "Give love a chance! 🎈",
  "I promise to make you happy! ✨",
  "Just click yes already! 🎀",
];

const memories = [
  {
    id: 1,
    title: "Hi",
    description: "The day we first met...",
    color: "#ff5733",
  },
  {
    id: 2,
    title: "I'm sorry this is coming late",
    description: "I'm sorry this is coming late",
    color: "#ec4899",
  },
  {
    id: 3,
    title: "But from the day I met you",
    description: "That beautiful sunset we shared...",
    color: "#3357ff",
  },
  {
    id: 4,
    title: "Since you were mine, Its been all about you",
    description: "Our first movie together...",
    color: "#ff33a8",
  },
  {
    id: 5,
    title: "My Smiles",
    description: "When we danced in the rain...",
    color: "#ec4899",
  },
  {
    id: 6,
    title: "My Joy",
    description: "When we danced in the rain...",
    color: "#ec4899",
  },
  {
    id: 7,
    title: "Even my writings",
    description: "When we danced in the rain...",
    color: "#ec4899",
  },
  {
    id: 8,
    title: "My life",
    description: "When we danced in the rain...",
    color: "#ec4899",
  },
  {
    id: 9,
    title: "And Today I still feel the same",
    description: "When we danced in the rain...",
    color: "#ec4899",
  },
  {
    id: 10,
    title: "And more",
    description: "When we danced in the rain...",
    color: "#db2777",
  },
  {
    id: 11,
    title: "I'm so happy",
    description: "When we danced in the rain...",
    content: <span>Video or Image </span>,
    color: "#ec4899",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [messageIndex, setMessageIndex] = useState(0);

  const moveNoButton = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    setNoButtonPosition({ x: newX, y: newY });
    setMessageIndex((prev) => (prev + 1) % messages.length);
  };

  const renderProposal = () => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-pink-50 mb-8 text-center">
        Will you be my Valentine? 💝
      </h1>
      <div className="space-y-4">
        <button
          onClick={() => alert("Yay! I'm so happy! 🎉💕")}
          className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300"
        >
          Yes! 💖
        </button>
        <button
          style={{
            position: "absolute",
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
            transition: "all 0.3s ease",
          }}
          onMouseOver={moveNoButton}
          className="bg-zinc-900 text-white px-8 py-3 rounded-lg"
          onClick={moveNoButton}
        >
          No 😢
        </button>
      </div>
      {noButtonPosition.x !== 0 && (
        <p className="mt-4 text-pink-100 text-xl animate-bounce">
          {messages[messageIndex]}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {currentPage < memories.length ? (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-pink-200">
              <SwipeIcon />
              <p className="text-lg font-medium">Swipe</p>
            </div>
            <div className="grid place-items-center  relative">
              <CardDeck cards={memories} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      ) : (
        renderProposal()
      )}
    </div>
  );
}

export default App;
