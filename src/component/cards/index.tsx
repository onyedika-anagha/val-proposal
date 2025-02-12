import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardDeck = ({
  cards,
  setCurrentPage,
}: {
  cards: {
    id: number;
    title: string;
    description: string;
    color: string;
    content?: React.ReactNode;
  }[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [cardStack, setCardStack] = useState(cards);

  const handleSwipe = (id: number) => {
    setCardStack((prev) => prev.filter((card) => card.id !== id));
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="deck-container">
      <AnimatePresence>
        {cardStack.map((card, index) => (
          <motion.div
            key={card.id}
            className={`card ${card.content ? "!p-2" : ""}`}
            style={{
              background: card.color,
              zIndex: cardStack.length - index,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 100 || info.offset.x < -100) {
                handleSwipe(card.id);
              }
            }}
            initial={{ scale: 1, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <>{card.content ? card.content : card.title}</>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardDeck;
