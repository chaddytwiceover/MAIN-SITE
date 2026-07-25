'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      whileHover="hover"
      className="group flex items-center gap-2 font-mono text-sm text-dim hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <motion.svg 
        variants={{ hover: { x: -4 } }}
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="square" 
        strokeLinejoin="miter"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </motion.svg>
      <span>BACK</span>
    </motion.button>
  );
}
