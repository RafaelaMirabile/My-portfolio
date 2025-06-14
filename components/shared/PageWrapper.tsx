'use client';

import { motion ,AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
    return (
<AnimatePresence>
    <motion.div
        key={pathname}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
        {children}
    </motion.div>
</AnimatePresence>
  );
}
