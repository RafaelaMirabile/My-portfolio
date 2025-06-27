'use client';
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import Image from "next/image";

type FloatingFlowerProps = {
  src: string;
  alt: string; 
  width?: number;
  height?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: string;
};

export default function FloatingFlower({
  src,
  width = 430,
  height = 430,
  top,
  left,
  right,
  bottom,
  zIndex = '0',
}: FloatingFlowerProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Vertical movement on scroll (already done)
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  // Motion value to track mouse X position
  const mouseX = useMotionValue(0);

  // Transform mouseX (window width range) to horizontal movement range, e.g. [-30, 30]
  const x = useTransform(
    mouseX,
    // input range: from 0 (left edge) to window.innerWidth (right edge)
    [0, typeof window !== 'undefined' ? window.innerWidth : 1000],
    // output range: move left 30px to right 30px (adjust as you like)
    [-30, 30]
  );

  // Setup event listener for mousemove to update mouseX value
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX);
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX]);

  const positionStyle: React.CSSProperties = {
    position: 'absolute',
    top,
    bottom,
    left,
    right,
    zIndex,
  };

  return (
    <motion.div
      ref={ref}
      style={{ y, x, ...positionStyle }}
      className="pointer-events-none"
    >
      <Image src={src} alt="flowers" width={width} height={height} className="bg-transparent" />
    </motion.div>
  );
}
