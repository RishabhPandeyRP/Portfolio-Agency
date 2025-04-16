"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { works, Work } from '@/data/works';
import { cn } from "@/lib/utils";

export default function WorksPage() {
    const [filter, setFilter] = useState<'all' | 'web' | 'app' | 'ui/ux'>('all');

    const filteredWorks = filter === 'all'
        ? works
        : works.filter(work => work.category === filter);

    return (
        <div className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "h-fit pt-16 md:pt-24 lg:pt-[8%] relative min-h-screen bg-[#121212] text-white overflow-hidden"
        )}>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-relaxed"
                    style={{ textShadow: '0 2px 6px #707070' }}
                    >
                        Our Masterpieces
                    </h1>
                    <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
                        Showcasing our expertise in web development, mobile applications, and UI/UX design.
                        We build modern, responsive, and user-friendly digital experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12"
                >
                    <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
                        All Works
                    </FilterButton>
                    <FilterButton active={filter === 'web'} onClick={() => setFilter('web')}>
                        Web
                    </FilterButton>
                    <FilterButton active={filter === 'app'} onClick={() => setFilter('app')}>
                        App
                    </FilterButton>
                    <FilterButton active={filter === 'ui/ux'} onClick={() => setFilter('ui/ux')}>
                        UI/UX
                    </FilterButton>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {filteredWorks.map((work, index) => (
                        <WorkCard key={work.id} work={work} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface FilterButtonProps {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

function FilterButton({ active, onClick, children }: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
                px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition-all
                ${active
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'bg-[#0d0d0d] text-gray-300 border border-[#2f2f2f] hover:bg-[#232323]'}
            `}
        >
            {children}
        </button>
    );
}

interface WorkCardProps {
    work: Work;
    index: number;
}

function WorkCard({ work, index }: WorkCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group"
        >
            <Link href={`/works/${work.id}`} className="block">
                <div className="bg-[#0d0d0d] border border-[#242424] rounded-xl overflow-hidden group-hover:shadow-lg group-hover:shadow-[#242424]/40 transition-all duration-300 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div className="relative aspect-video overflow-hidden">
                        <motion.img
                            src={work.images[0]}
                            alt={work.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        {work.featured && (
                            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-indigo-600 text-white text-xs px-2 sm:px-3 py-1 rounded-full">
                                Featured
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-3 sm:p-6">
                                <p className="text-white text-sm sm:text-base font-medium">{work.shortDescription}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6">
                        <div className="flex flex-col gap-2 mb-2 sm:mb-3">
                            <span className="text-xs uppercase tracking-wide text-indigo-400">
                                {work.category === 'web' ? 'Web Development' :
                                    work.category === 'app' ? 'App Development' : 'UI/UX Design'}
                            </span>
                            <div className="flex flex-wrap gap-1">
                                {work.techStack.slice(0, 3).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {work.techStack.length > 3 && (
                                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                        +{work.techStack.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-indigo-400 transition-colors line-clamp-2">
                            {work.title}
                        </h3>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}