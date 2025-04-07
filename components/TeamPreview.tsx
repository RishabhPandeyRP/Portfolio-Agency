"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Rishabh Pandey",
    designation: "Fullstack Web Developer",
    image:
      "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg",
  },
  {
    id: 2,
    name: "Rishabh Didwania",
    designation: "UI/UX Developer",
    image:
      "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg",
  },
  {
    id: 3,
    name: "Sanat Kumar Mishra",
    designation: "Backend Developer",
    image:
      "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioDidwania_wvzfuj.jpg",
  },
  {
    id: 4,
    name: "Swapnil Gupta",
    designation: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg",
  },
  
  
];

export function TeamPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
