"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ExpertiseCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  // Handle window resize and set device type
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  // Function to calculate responsive dimensions
  const getResponsiveValues = () => {
    const width = screenWidth;
    
    // Default values for desktop
    let cardWidth = 400;
    let cardHeight = 500;
    let xOffset = 60;
    let peeking = 90;
    let spreadDistance = 120;
    
    // Tablet adjustments
    if (width < 1024 && width >= 768) {
      cardWidth = 320;
      cardHeight = 420;
      xOffset = 40;
      peeking = 70;
      spreadDistance = 100;
    }
    
    // Mobile adjustments
    if (width < 768) {
      cardWidth = Math.min(280, width * 0.75);
      cardHeight = 380;
      xOffset = 20;
      peeking = 40;
      spreadDistance = 60;
    }
    
    // Very small screens
    if (width < 480) {
      cardWidth = Math.min(240, width * 0.8);
      cardHeight = 340;
      xOffset = 10;
      peeking = 25;
      spreadDistance = 40;
    }
    
    return { cardWidth, cardHeight, xOffset, peeking, spreadDistance };
  };

  // Get responsive values
  const { cardWidth, cardHeight, xOffset, peeking, spreadDistance } = getResponsiveValues();

  // Function to determine card position in the stack
  const getCardPosition = (index: number, cardId: number) => {
    // Center card is always at index 1
    const centerCardId = 2;
    
    // Mobile view: vertical stack
    if (isMobile) {
      // const baseIndex = index * 2; // Increase z-index gap for clearer stacking
      
      // If a card is hovered in mobile view
      if (hoveredCard === cardId) {
        return {
          x: 0,
          y: 0, // Center the hovered card
          scale: 1,
          rotate: 0,
          zIndex: 30
        };
      }
      
      // Default mobile stacked position with slight offset
      return {
        x: 0,
        y: (index - 1) * 40, // Slight vertical offset for stacked appearance
        scale: 0.95 - (Math.abs(index - 1) * 0.05),
        rotate: cards[index].initialRotation / 2, // Reduce rotation for mobile
        zIndex: 10 - index
      };
    }
    
    // Desktop view: horizontal layout
    // If this is the center card and it's being hovered, it should be in focus
    if (cardId === centerCardId && hoveredCard === centerCardId) {
      return {
        x: 0,
        scale: 1.05,
        rotate: 0,
        zIndex: 30,
        y: -20
      };
    }
    
    // If center card is hovered, spread out side cards
    if (hoveredCard === centerCardId) {
      return {
        x: cardId === 1 ? -spreadDistance : cardId === 3 ? spreadDistance : 0,
        scale: cardId === centerCardId ? 1.05 : 0.85,
        rotate: cardId === 1 ? -15 : cardId === 3 ? 15 : 0,
        zIndex: cardId === centerCardId ? 30 : (3 - Math.abs(index - 1)) * 5,
        y: cardId === centerCardId ? -20 : 0
      };
    }
    
    // If side card is hovered, it should "peek" out but not overtake the center
    if (hoveredCard === cardId && cardId !== centerCardId) {
      // Side cards peek out but stay in proper stacking order
      return {
        x: cardId === 1 ? -peeking : peeking, // Peek out a bit more
        scale: 0.95, // Slightly larger but not dominant
        rotate: cardId === 1 ? -5 : 5, // Reduced rotation for peeking effect
        zIndex: 20, // Higher than default but below center
        y: 0 // No vertical movement
      };
    }
    
    // Default positions when no card is hovered or other cases
    return {
      x: (index - 1) * xOffset,
      scale: index === 1 ? 1 : 0.9,
      rotate: cards[index].initialRotation,
      zIndex: (3 - Math.abs(index - 1)) * 5, // Center card gets highest z-index by default
      y: 0
    };
  };

  return (
    <motion.div 
      className="relative w-full mx-auto h-96 sm:h-96 md:h-96 lg:h-96 flex items-center justify-center bg-transparent rounded-2xl p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {cards.map((card, index) => {
        const position = getCardPosition(index, card.id);
        
        return (
          <motion.div
            key={card.id}
            className={`absolute cursor-pointer backdrop-blur-sm bg-opacity-80 bg-gradient-to-br ${card.color} shadow-lg ${card.borderColor} overflow-hidden rounded-xl sm:rounded-2xl`}
            style={{
              width: cardWidth,
              height: cardHeight,
              boxShadow: hoveredCard === card.id
                ? "0 15px 35px rgba(0, 0, 0, 0.25), 0 0 10px rgba(25, 25, 25, 0.1) inset"
                : "0 5px 15px rgba(0, 0, 0, 0.2), 0 0 5px rgba(10, 10, 10, 0.1) inset"
            }}
            
            initial={{ 
              rotate: isMobile ? cards[index].initialRotation / 2 : cards[index].initialRotation,
              x: isMobile ? 0 : (index - 1) * xOffset,
              y: isMobile ? (index - 1) * 40 : 0,
              scale: index === 1 ? 1 : 0.9,
              zIndex: (3 - Math.abs(index - 1)) * 5,
            }}
            
            animate={{ 
              rotate: position.rotate,
              x: position.x,
              scale: position.scale,
              zIndex: position.zIndex,
              y: position.y,
            }}
            
            transition={{ 
              type: "spring", 
              stiffness: 150, 
              damping: 25
            }}
            
            onHoverStart={() => !isMobile && setHoveredCard(card.id)}
            onHoverEnd={() => !isMobile && setHoveredCard(null)}
            onClick={() => isMobile && setHoveredCard(hoveredCard === card.id ? null : card.id)}
            whileTap={{ scale: Math.max(position.scale - 0.05, 0.85) }}
          >
            {/* Highlight effect overlay for side cards when hovered */}
            {card.id !== 2 && (
              <motion.div 
                className="absolute inset-0 bg-white bg-opacity-0 z-10"
                animate={{ 
                  backgroundColor: hoveredCard === card.id ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                  boxShadow: hoveredCard === card.id ? "0 0 20px rgba(255, 255, 255, 0.2) inset" : "none"
                }}
                transition={{ duration: 0.2 }}
              />
            )}
            
            <motion.div 
              className="h-full w-full p-4 sm:p-6 flex flex-col justify-between relative z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{card.title}</h3>
                <div className="w-8 sm:w-12 h-1 bg-white rounded-full mb-2 sm:mb-4 opacity-80" />
                <p className="text-xs sm:text-sm text-gray-100">{card.description}</p>
              </motion.div>
              
              <motion.div
                className="mt-auto"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredCard === card.id ? 1 : 0,
                  y: hoveredCard === card.id ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center text-white text-xs sm:text-sm">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ExpertiseCards;