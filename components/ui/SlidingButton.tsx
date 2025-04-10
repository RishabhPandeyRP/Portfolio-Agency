"use client"
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlidingButtonProps {
  text: string;
  icon: ReactNode;
  className?: string;
  hoverClassName?: string;
  onClick?: () => void;
}

const SlidingButton: React.FC<SlidingButtonProps> = ({
  text,
  icon,
  className = "",
  hoverClassName = "bg-gray-500",
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className={`relative text-white px-9 py-3 rounded-lg overflow-hidden h-12 transition-all duration-300 cursor-pointer ${className} ${isHovered ? hoverClassName : ''} shadow-[0_4px_20px_-6px_#2a2b2e]
        hover:shadow-[0_10px_25px_-5px_#1A1A1A] 
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Text that slides out to the right */}
        <motion.div
          className="absolute flex items-center justify-center w-full"
          animate={{ 
            x: isHovered ? "100%" : "0%", 
            opacity: isHovered ? 0 : 1 
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <span>{text}</span>
        </motion.div>
        
        {/* Icon that comes in from far outside the left edge */}
        <motion.div 
          className="absolute flex items-center justify-center w-full"
          animate={{ 
            x: isHovered ? "0%" : "-100%", 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      </div>
    </button>
  );
};

export default SlidingButton;