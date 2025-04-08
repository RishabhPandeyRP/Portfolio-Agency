"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const ExpertiseCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "Web Apps",
      description: "Creating powerful, scalable web applications with modern frameworks.",
      color: "from-[#111111] to-black",
      borderColor: "border-[5px] border-[#1f1f1f]",
      initialRotation: -10,
    },
    {
      id: 2,
      title: "UI Design",
      description: "Crafting intuitive interfaces that delight and inspire users.",
      color: "from-[#111111] to-black",
      borderColor: "border-[5px] border-[#1f1f1f]",
      initialRotation: 0,
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Building responsive native applications for Android devices.",
      color: "from-[#111111] to-black",
      borderColor: "border-[5px] border-[#1f1f1f]",
      initialRotation: 10,
    },
  ];

  return (
    <motion.div 
      className="relative w-4/5 mx-auto h-96 flex items-center justify-center bg-transparent rounded-2xl p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`w-[400px] h-[500px] rounded-2xl absolute cursor-pointer backdrop-blur-sm bg-opacity-80 bg-gradient-to-br ${card.color} shadow-lg ${card.borderColor} overflow-hidden`}
          style={{
            boxShadow: hoveredCard === card.id
              ? "0 15px 35px rgba(0, 0, 0, 0.25), 0 0 10px rgba(25, 25, 25, 0.1) inset"
              : "0 5px 15px rgba(0, 0, 0, 0.2), 0 0 5px rgba(10, 10, 10, 0.1) inset"
          }}
          
          initial={{ 
            rotate: card.initialRotation,
            x: (index - 1) * 60,
            scale: index === 1 ? 1 : 0.9,
            zIndex: index === 1 ? 10 : 0,
          }}
          animate={{ 
            rotate: hoveredCard === card.id ? 0 : card.initialRotation,
            x: hoveredCard === card.id 
              ? 0 
              : hoveredCard 
                ? (index - 1) * 80 + (hoveredCard < card.id ? 80 : -80)
                : (index - 1) * 60,
            scale: hoveredCard === card.id ? 1.05 : index === 1 && !hoveredCard ? 1 : 0.9,
            zIndex: hoveredCard === card.id ? 20 : index === 1 && !hoveredCard ? 10 : 0,
            y: hoveredCard === card.id ? -20 : 0,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 150, 
            damping: 25
          }}
          whileHover={{ 
            scale: 1.05,
            rotate: 0,
            y: -20,
            zIndex: 20,
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.25), 0 0 10px rgba(25, 25, 25, 0.1) inset",
            transition: { type: "spring", stiffness: 150, damping: 25 }
          }}
          onHoverStart={() => setHoveredCard(card.id)}
          onHoverEnd={() => setHoveredCard(null)}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="h-full w-full p-6 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 * index, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
              <div className="w-12 h-1 bg-white rounded-full mb-4 opacity-80" />
              <p className="text-gray-100 text-sm">{card.description}</p>
            </motion.div>
            
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredCard === card.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center text-white text-sm">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExpertiseCards;