"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { works, Work } from '@/data/works';
import { ChevronLeftIcon, GlobeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WorkDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [work, setWork] = useState<Work | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const workId = Array.isArray(params.id) ? params.id[0] : params.id;
    const foundWork = works.find(w => w.id === workId);

    if (foundWork) {
      setWork(foundWork);
    } else {
      router.push('/works');
    }

    setLoading(false);
  }, [params.id, router]);

  if (loading || !work) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className={cn(
      "absolute inset-0",
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      "h-fit relative overflow-hidden min-h-screen bg-[#0e0e0e] text-white"
    )}>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-20 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/works" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-6 sm:mb-8 group">
            <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-[-4px] transition-transform" />
            Back to All Works
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-6 aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={work.images[currentImageIndex]}
                    alt={`${work.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap space-x-2 sm:space-x-3 mb-6 sm:mb-8">
                {work.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-indigo-500 scale-125' : 'bg-gray-600'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex mb-8 sm:mb-0">
                <a
                  href={work.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
                >
                  <GlobeIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Visit Live Site
                </a>
              </div>
            </div>

            <div>
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-500 rounded-full text-xs sm:text-sm text-white mb-3 sm:mb-4">
                {work.category === 'web' ? 'Web Development' :
                  work.category === 'app' ? 'App Development' : 'UI/UX Design'}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{work.title}</h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="prose prose-invert max-w-none mb-6 sm:mb-8"
              >
                <p className="text-base sm:text-lg text-gray-300">{work.description}</p>
              </motion.div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {work.techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-[#2d2d2d] border border-[#212121] text-gray-200 rounded-lg text-xs sm:text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Other Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {works
                    .filter(w => w.id !== work.id)
                    .slice(0, 2)
                    .map((relatedWork) => (
                      <Link
                        href={`/works/${relatedWork.id}`}
                        key={relatedWork.id}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-lg aspect-video mb-2">
                          <motion.img
                            src={relatedWork.images[0]}
                            alt={relatedWork.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <h4 className="text-sm sm:text-base font-medium group-hover:text-indigo-400 transition-colors line-clamp-2">
                          {relatedWork.title}
                        </h4>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}