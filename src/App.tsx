import { useState } from "react";
import "./App.css";
import CardDeck from "./component/cards";

/**
 * SwipeIcon Component
 * Renders an animated arrow icon to indicate swipe functionality
 * The animation is controlled via Tailwind classes
 */
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

/**
 * Messages shown when user tries to click "No"
 * Add or modify messages to customize the experience
 * Each message supports emoji
 */
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

/**
 * Memory cards configuration
 * Each card can have:
 * @property {number} id - Unique identifier for the card
 * @property {string} title - Main text shown on the card
 * @property {string} description - Secondary text or description
 * @property {string} color - Background color in hex format
 * @property {React.ReactNode} content - Optional content like video/image
 *
 * Example structure for adding your own memories:
 * {
 *   id: number,
 *   title: "Your Title",
 *   description: "Your Description",
 *   color: "#HexColor",
 *   content?: <YourComponent /> // Optional
 * }
 */
const memories = [
  {
    id: 1,
    title: "Hello!",
    description: "Welcome to our journey...",
    color: "#ff5733",
  },
  {
    id: 2,
    title: "Our First Memory",
    description: "Where it all began...",
    color: "#ec4899",
  },
  {
    id: 3,
    title: "Special Moments",
    description: "Time spent with you...",
    color: "#3357ff",
  },
  {
    id: 4,
    title: "Your Beautiful Soul",
    description: "Everything about you...",
    color: "#ff33a8",
  },
  {
    id: 5,
    title: "Precious Smiles",
    description: "Your happiness means everything...",
    color: "#ec4899",
  },
  {
    id: 6,
    title: "Sweet Memories",
    description: "Every moment with you...",
    color: "#ec4899",
  },
  {
    id: 7,
    title: "My Treasure",
    description: "You're so precious...",
    color: "#ec4899",
  },
  {
    id: 8,
    title: "My Blessing",
    description: "Grateful for you...",
    color: "#ec4899",
  },
  {
    id: 9,
    title: "Our Favorite Things",
    description: "All the little moments...",
    color: "#ec4899",
  },
  {
    id: 10,
    title: "Sweet Nothings",
    description: "Just being playful...",
    color: "#db2777",
  },
  {
    id: 11,
    title: "The Big Question",
    description: "A special moment...",
    content: (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
        src="/path/to/your/video.mp4" // Replace with your video path
      />
    ),
    color: "#ec4899",
  },
];

/**
 * Main App Component
 * Features:
 * 1. Swipeable memory cards
 * 2. Interactive proposal screen
 * 3. Moving "No" button with custom messages
 * 4. Animated UI elements
 */
function App() {
  // State for tracking current card and button position
  const [currentPage, setCurrentPage] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 10, y: 10 });
  const [messageIndex, setMessageIndex] = useState(0);

  /**
   * Handles the movement of the "No" button
   * Randomly positions the button within viewport
   * Updates the pleading message
   */
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
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center">
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
