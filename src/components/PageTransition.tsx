'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useSkipAnimation } from '@/lib/useSafeAnimation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const skip = useSkipAnimation();

  return (
    <motion.div
      key={pathname}
      initial={skip ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
