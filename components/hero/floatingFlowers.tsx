'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
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
  width = 450,
  height = 450,
  top,
  left,
  right,
  bottom,
  zIndex = '0',
}: FloatingFlowerProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  const positionStyle: React.CSSProperties = {
    position: 'absolute',
    top,
    bottom,
    left,
    right,
    zIndex,
  };

  return (
    <motion.div style={{ y, ...positionStyle }} ref={ref} className="pointer-events-none">
      <Image src={src} alt="Flor" width={width} height={height} className="bg-transparent" />
    </motion.div>
  );
}
